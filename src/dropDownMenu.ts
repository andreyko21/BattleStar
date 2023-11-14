export function initDropDown() {
  const headerUserInfoBtn = document.querySelector<HTMLButtonElement>(
    ".header__user-info-button"
  );
  const headerNotionBtn = document.querySelector<HTMLButtonElement>(
    ".header__notification-button"
  );
  const headerMessBtn = document.querySelector<HTMLButtonElement>('.header__messages-button')

  if (headerUserInfoBtn && headerNotionBtn &&  headerMessBtn) {
    headerUserInfoBtn.addEventListener("click", showDropDown);
    headerNotionBtn.addEventListener("click", showDropDown);
    headerMessBtn.addEventListener("click", showDropDown);
  }

  function showDropDown() {
    const dropDownAccount = document.querySelector<HTMLDivElement>(".dropdown__account");
    const dropDownNotion = document.querySelector<HTMLDivElement>('.dropdown__notification')
    const dropDownMess = document.querySelector<HTMLDivElement>('.dropdown__messages')
    dropDownAccount?.classList.toggle("dropdown__account_hide");
    dropDownNotion?.classList.toggle("dropdown__notification_hide");
    dropDownMess?.classList.toggle("dropdown__messages_hide")
  }
}
