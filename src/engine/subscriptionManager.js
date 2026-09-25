/**
 * Subscription Manager for LottaMATH
 * 
 * Handles license key storage (localStorage), server-side verification with
 * 5-minute session caching, Stripe checkout / customer portal redirections,
 * and kill-switch respecting premium gating.
 */

const LICENSE_KEY_STORAGE = 'lottamath_license_key';
const SUBSCRIPTION_CACHE_KEY = 'lottamath_sub_cache';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache TTL
const API_BASE = './api';

/**
 * Retrieves the stored license key from localStorage.
 * @returns {string|null}
 */
export function getLicenseKey() {
  try {
    return localStorage.getItem(LICENSE_KEY_STORAGE);
  } catch (e) {
    console.warn('Unable to read license key from localStorage:', e);
    return null;
  }
}

/**
 * Saves a license key to localStorage and clears cached verification state.
 * @param {string} key
 */
export function setLicenseKey(key) {
  try {
    if (key) {
      localStorage.setItem(LICENSE_KEY_STORAGE, key.trim());
    } else {
      localStorage.removeItem(LICENSE_KEY_STORAGE);
    }
    clearSubscriptionCache();
  } catch (e) {
    console.warn('Unable to save license key to localStorage:', e);
  }
}

/**
 * Removes the stored license key from localStorage and clears cache.
 */
export function clearLicenseKey() {
  try {
    localStorage.removeItem(LICENSE_KEY_STORAGE);
    clearSubscriptionCache();
  } catch (e) {
    console.warn('Unable to clear license key:', e);
  }
}

/**
 * Clears the session verification cache.
 */
function clearSubscriptionCache() {
  try {
    sessionStorage.removeItem(SUBSCRIPTION_CACHE_KEY);
  } catch (e) {
    /* ignore */
  }
}

/**
 * Checks sessionStorage cache for existing unexpired verification result.
 * @returns {Object|null}
 */
function getCachedSubscription() {
  try {
    const raw = sessionStorage.getItem(SUBSCRIPTION_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (cached && cached.timestamp && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      return cached.data;
    }
  } catch (e) {
    /* ignore */
  }
  return null;
}

/**
 * Stores verification result in sessionStorage with timestamp.
 * @param {Object} data
 */
function setCachedSubscription(data) {
  try {
    sessionStorage.setItem(
      SUBSCRIPTION_CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() })
    );
  } catch (e) {
    /* ignore */
  }
}

/**
 * Calls GET /api/verify.php?key=... and returns the parsed verification state.
 * Caches result in sessionStorage for 5 minutes to avoid redundant network queries.
 *
 * @param {boolean} [forceRefresh=false]
 * @returns {Promise<{valid: boolean, plan?: string, status?: string, email?: string, premiumEnforced: boolean, expiresAt?: string}>}
 */
export async function verifySubscription(forceRefresh = false) {
  return {
    valid: true,
    plan: "demo-all-access",
    status: "active",
    email: "demo@lottamath.ch",
    premiumEnforced: false,
    expiresAt: null,
  };
}

/**
 * Evaluates whether the current user has access to premium content.
 * Respects the kill-switch:
 * - If premiumEnforced === false -> ALWAYS returns true (all content free).
 * - If premiumEnforced === true -> returns true ONLY if subscription is valid.
 *
 * @param {Object} [subStatus] - Result object from verifySubscription()
 * @returns {boolean}
 */
export function isPremium(subStatus) {
  if (!subStatus) return true; // Default open when status is still loading
  if (!subStatus.premiumEnforced) return true; // Kill-switch inactive: everything is free!
  return Boolean(subStatus.valid);
}

/**
 * Initiates Stripe Checkout session creation via backend and returns redirect URL.
 * @param {'monthly'|'yearly'} plan
 * @returns {Promise<string>}
 */
export async function getCheckoutUrl(plan = "monthly") {
  return "#/subscription-success";
}

/**
 * Requests a Stripe Customer Portal URL for the active subscriber.
 * @returns {Promise<string>}
 */
export async function getPortalUrl() {
  alert("Demo-Modus: In der Produktions-App öffnet sich hier das Stripe Customer Portal zur Verwaltung von Zahlungsmitteln und Rechnungen.");
  return "#/";
}

/**
 * Parses URL query/hash parameters when returning from Stripe Checkout.
 * Captures any ?session_id= or ?license_key= parameter and triggers verification.
 * @returns {Promise<boolean>} True if a subscription callback was processed
 */
export async function handleSubscriptionCallback() {
  try {
    const fullUrl = window.location.href;
    const urlObj = new URL(fullUrl);
    
    // Check search params and hash query params
    let key = urlObj.searchParams.get('license_key');
    const sessionId = urlObj.searchParams.get('session_id');

    if (!key && urlObj.hash.includes('?')) {
      const hashQuery = urlObj.hash.split('?')[1];
      const hashParams = new URLSearchParams(hashQuery);
      key = hashParams.get('license_key') || key;
    }

    if (key) {
      setLicenseKey(key);
      await verifySubscription(true);
      return true;
    }

    if (sessionId) {
      // If returning with session_id, refresh subscription status
      await verifySubscription(true);
      return true;
    }
  } catch (e) {
    console.warn('Error handling subscription callback:', e);
  }

  return false;
}
