'use strict'

// 1. car и cat.
let pattern = "ca[r|t]";

// 2. pop и prop.
let pattern = "pr?op";

// 3. ferret, ferry и ferrari.
let pattern = "ferr(et|y|ari)";

// 4. Любое слово, оканчивающееся на ious.
let pattern = "\b\w+ious\b";

// 5. Пробельный символ, за которым следуют точка, запятая, двоеточие или точка с запятой. 
let pattern = "\s[.|,|;]";

// 6. Слово длиннее шести букв.
let pattern = "\b\w{6,}\b";

// 7. Слово без буквы е (или Е).
let pattern = "\b[^\s(e|E)]*\b";
