try {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "https://xcancel.com\\1"
          }
        },
        condition: {
          regexFilter: "^https?://(?:www\\.)?twitter\\.com(.*)",
          resourceTypes: ["main_frame"]
        }
      },
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "https://xcancel.com\\1"
          }
        },
        condition: {
          regexFilter: "^https?://(?:www\\.)?x\\.com(.*)",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  }, () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating dynamic rules:", chrome.runtime.lastError);
    } else {
      console.log("Dynamic rules updated successfully");
    }
  });
} catch (error) {
  console.error("An error occurred while setting up the redirects:", error);
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("Twitter/X to xcancel Redirector extension installed");
});
