import { createGlobalStyle } from "styled-components";
import { screensize } from "../screens";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
}

/* ============================================================== */
/* ======================SECTION RESET=========================== */
/* ============================================================== */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;

  font-family: "Inter", sans-serif;

}
// HTML5 display-role reset for older browsers
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: lato;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}



/* ================================================================== */
/* ======================END SECTION RESET=========================== */
/* ================================================================== */


/* ================================================================== */
/* ======================  SECTION BASE ============================= */
/* ================================================================== */


.m-only {
  @media ${screensize.desktopUp} {
    display: none !important;
  }
}

.desktop-only {
  display: none;
  
  @media ${screensize.desktopUp} {
    display: block;
  }
}

.none {
  display: none !important;
}

.hidden {
  visibility: hidden;
}

/* ================================================================== */
/* ======================END SECTION BASE =========================== */
/* ================================================================== */



h1,
h2,
h3,
h4 {
  font-family: "Inter", sans-serif;

  font-style: normal;
}

p,
a,
span,
button {
  font-family: "Inter", sans-serif;

  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.75rem;
  text-decoration: none;
}

h1{
  font-size: 3.125rem;
  line-height: 100%;
}
h2{
  font-size: 2.5rem;
  line-height:100%;
}
h3{
  font-size: 2rem;
  line-height:119%;
}

.text-center {
  text-align:center;
}

.bold {
  font-weight: bold;
}

.h4-bold{
  font-family: "Inter", sans-serif;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.body-2{
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.caption-medium{
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

  .label-med{
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
.underline-custom{
  color:#7E49FF;
  text-decoration-line: underline;
}
.p-bold{
  font-family: "Inter";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%;
}
.caption-bold{
  font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.caption-reg{
  font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.caption-semibold{
  font-family: "Inter";
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.p-semibold{
font-family: "Manrope";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%;
}
.label-bold{
font-family: "Inter";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 22px; 
}

.show-more{
  color:#7E3AF2;
}
`;
