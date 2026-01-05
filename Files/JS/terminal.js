document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     TERMINAL TYPING
  ================================ */
  const lines = [
  "Get-ADDomain",
  "Get-ADForest",
  "Get-ADUser -Filter * | Select Name,Enabled",
  "Get-ADUser -Identity jdoe -Properties *",
  "Get-ADGroup -Filter *",
  "Get-ADGroupMember \"Domain Admins\"",
  "Get-ADComputer -Filter *",
  "Get-ADOrganizationalUnit -Filter *",
  "Search-ADAccount -LockedOut",
  "Get-ADReplicationFailure -Scope Forest",

  "Connect-MsolService",
  "Get-MsolCompanyInformation",
  "Get-MsolUser -All",
  "Get-MsolAccountSku",
  "Get-MsolUser -UserPrincipalName user@domain.com",

  "Connect-ExchangeOnline",
  "Get-EXOMailbox",
  "Get-Mailbox -ResultSize Unlimited",
  "Get-MailboxStatistics user@domain.com",
  "Get-TransportRule"
];


  let i = 0, j = 0;
  const el = document.getElementById("terminal-text");

  function type() {
    if (!el) return;

    if (i < lines.length) {
      if (j < lines[i].length) {
        el.textContent += lines[i][j++];
        setTimeout(type, 40);
      } else {
        el.textContent += "\n";
        i++; j = 0;
        setTimeout(type, 400);
      }
    }
  }

  type();

  /* ===============================
     THEME TOGGLE
  ================================ */
  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");

      // change icon
      toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  }
});
