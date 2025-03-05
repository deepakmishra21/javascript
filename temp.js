var getRootUrl = function () {
  var origin = window.location.origin;
  if (origin.indexOf("local") > -1) {
    origin = origin.replace("local.", "qa.").replace(":3001", "");
  }
  return origin;
};
var callAjax = function (
  url,
  method,
  async,
  withCredentials,
  callback,
  resolve,
  data,
  reject
) {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onerror = function () {
    if (reject) {
      reject(null, xmlhttp.responseText);
    }
  };
  xmlhttp.onload = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if (callback)
        if (resolve) {
          callback(xmlhttp.responseText, resolve);
        } else {
          callback(xmlhttp.responseText);
        }
    } else {
      if (callback) {
        if (resolve) {
          callback(null, resolve);
        } else {
          callback(null);
        }
      }
    }
  };
  xmlhttp.open(method, url, async);
  if (withCredentials) xmlhttp.withCredentials = true;

  if (data) {
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(data);
  } else {
    xmlhttp.send();
  }
};
var readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
var createCookie = function (name, value, days, domain) {
  var expires = "";
  var _domain = "";
  var secure = ";secure";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else expires = "";

  if (domain) {
    _domain = "; domain=" + domain;
  }
  document.cookie =
    name + "=" + value + secure + expires + _domain + "; path=/;";
};
var loadGTM = function () {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-KT6WK8SH");
};


var loadJs = function (src, async, callback, crossorigin, defer) {
  var s, r, t;
  r = false;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.src = src;
  if (crossorigin) {
    s.crossOrigin = "anonymous";
  }
  s.async = async != null && async != undefined ? async : true;
  s.defer = defer != null && defer != undefined ? defer : false;
  s.onload = s.onreadystatechange = function () {
    if (
      !r &&
      (!this.readyState ||
        this.readyState == "complete" ||
        this.readyState == "loaded")
    ) {
      r = true;
      callback && callback();
    }
  };
  t = document.getElementsByTagName("script")[0];
  t && t.parentNode && t.parentNode.insertBefore(s, t);
};
var loadJsWithKey = function (src, id, key) {
  var f = document.createElement("script");
  f.setAttribute("src", src);
  f.setAttribute("id", id);
  f.setAttribute("data-app-key", key);
  if (typeof f != "undefined")
    document.getElementsByTagName("head")[0].appendChild(f);
};
var _CONSTANTS = {
  USER_STATUS: "UserStatus",
  VSUID: "vsuid",
  COMMON: "common",
  CCPA_STATUS: "CCPA_STATUS",
  SHOW_COOKIE_CONSENT_BANNER: "show_cookie_consent_banner",
  TEST_COUNTRY: "testcountry",
  LAYER_ID: "e_layer",
  VSTR: "vstr",
  SESSION_ID: "_session_id",
  CLEAR_COOKIE: "clearCookie",
  SOFT_REG_POPUP_DISPLAYED: "softRegPopupDisplayed",
  JOBS_COUNT: "jobs_type_count",
  WIZARD_DATA: "wizard_data",
  WIZARD_FLOW: "wizard_flow",
};
var CONFIG_OPTIONS = {
  "productCD": "FJS",
  "portalCD": "FXJ",
};

function executeFetch(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
  });
}

var LoadVisitorJS = function () {
  var _Promise= window.Promise;
  loadJs(getRootUrl() + "/visitor/tracking-v8.js", true, function () {
    if (_Promise && Promise) {
      if (!window.Promise.allSettled && _Promise.allSettled) {
        window.Promise.allSettled = _Promise.allSettled;
      }
    }
    trackPageView();
    var includeUserAgent = false;
    var includeGeolocation = true;
    var isRewriteConfigured = false;
    var cookiePath = "/";
    var isRewriteConfiguredWithPath = false;
    try {
      if (window.TS && window.TS.Track) {
        window.TS.Track(
          CONFIG_OPTIONS.productCD,
          CONFIG_OPTIONS.portalCD,
          includeUserAgent,
          includeGeolocation,
          isRewriteConfigured,
          cookiePath,
          isRewriteConfiguredWithPath
        );
      }
    } catch (err) {
      console.log(err);
    }
  });
};
var loadLoginJS = function () {
  loadJs(getRootUrl() + "/signin/scripts/app/login.min.js", true);
};
var readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

var loadCCPA = function() {
  let urlParams = new URLSearchParams(window.location.search); 
  let testCountry = urlParams.get('testcountry');
  let countryClaimsEBURL = window.location.origin + "/eb/api/v1/user/countryclaims";

  var isGPC = false;
  if (
    window &&
    window.navigator &&
    window?.navigator?.globalPrivacyControl === true
  ) {
    isGPC = true;
  }
  
  executeFetch(countryClaimsEBURL)
  .then(function (response) {

    let isBannerEventSend = localStorageGetItem('isBannerEventSend');

    if(!isGPC && ((response && response.countryCode === 'US' && !isBannerEventSend) || testCountry==='US' )){

      const cont = document.createElement('div');
      cont.id = 'cookies-content'; 
      cont.classList.add('ccpa-banner');
      cont.innerHTML = `
        <p>FlexJobs uses cookies as well as our third-party affiliates. When you use our website, you understand that we collect personal data to improve your experience.<a href="/privacy-policy" target=_blank> Learn more</a></p>
        <i class="fa fa-xmark"></i>
      `;
      Object.assign(cont.style, {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.6rem 3.2rem',
        columnGap: '2rem',
        alignItems: 'center',
        boxShadow: '0 0.4rem 2.5rem 0 #00000040',
        backgroundColor: '#fff',
        zIndex: '9',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
    });
      document.body.appendChild(cont);
      localStorageSetItem('isBannerEventSend', true);
      
      function handleClick() {
        localStorageSetItem('isBannerEventSend', true);
        cont.remove(); 
      };

      var icon = cont.querySelector('.fa-xmark');
      icon.addEventListener('click', handleClick);
    }
  })
  .catch(function(error) {
    console.error("Error fetching country claims:", error);
  });
};

function loadStylesheet (href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

function loadCSS(){
  if(window && window.location.href.includes('/expertapply')){
    const basePath = window.location.origin+`/blobcontent/flexjobs`;
    loadStylesheet(`${basePath}/fonts/fontawesome.min.css`);
  }
}



function localStorageGetItem(key) {
  let result = "";
  try {
    if (typeof window === "object" && window.localStorage) {
      result = window.localStorage.getItem(key);
    }
    return result;
  } catch (error) {
    // Empty catch block
    // This catch block intentionally left empty
  }
  return result;
}

function localStorageSetItem(key, value) {
  try {
    if (typeof window === "object" && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch (error) {
    // Empty catch block
    // This catch block intentionally left empty
  }
}

function localStorageRemoveItem(key) {
  try {
    if (typeof window === "object" && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  } catch (error) {
    // Empty catch block
    // This catch block intentionally left empty
  }
}

function getSuperEventProps() {
  try {
    var userStatus = {
      IsUserLoggedIn: false,
      User: {
        UserId: "",
        Role: "0",
      },
    };
    if (readCookie(_CONSTANTS.USER_STATUS)) {
      userStatus = JSON.parse(readCookie(_CONSTANTS.USER_STATUS));
    }
    var superProperty = {
      userId: userStatus.User.UserId,
      visitId: readCookie(_CONSTANTS.VSUID),
      "Login Status": userStatus.IsUserLoggedIn ? "TRUE" : "FALSE",
      "Subscription Status": localStorageGetItem("subscriptionStatus")
        ? localStorageGetItem("subscriptionStatus")
        : "FALSE",
      "Payment Status": localStorageGetItem("paymentStatus")
        ? localStorageGetItem("paymentStatus")
        : "Not Started",
      time: new Date().toISOString(),
      productCD: CONFIG_OPTIONS.productCD,
      portalCD: CONFIG_OPTIONS.portalCD,
      appCD: 'FXJ_PRD_W_COR'
    };
    return superProperty;
  } catch (e) {
    console.error("Error while getting superProperty", e);
    return {
      error: "superProperty",
    };
  }
}
function track(eventName, eventProps) {
  if (!eventProps) {
    eventProps = {};
  }
  var superProps = getSuperEventProps();
  eventProps = eventProps || {};
  eventProps = { ...eventProps, ...superProps };
  if (window?.document)
    eventProps = { ...eventProps, referrer: document.referrer };
  if (window.location.href.indexOf("local.") > -1) {
    console.log(eventName, eventProps, new Date());
    return;
  }
  if (window.TrackEvents && window.analytics && eventProps.visitId) {
    window.TrackEvents(eventName, eventProps, eventProps.userId);
  } else {
    setTimeout(function () {
      track(eventName, eventProps);
    }, 100);
  }
}
var trackPageView = function () {
  var objToSend = { "Page Type": "Product" };
  track("page", objToSend);
};
(function () {
  LoadVisitorJS();
  loadGTM();
  loadLoginJS();
  loadCCPA();
  loadJs(getRootUrl() + "/blob/common/consent-manager/cookie-consent.min.js", true);
  loadCSS();
})();
