function renderLicenseBadge(data) {
  if (data.license === 'Apache License 2.0') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'ISC License') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
    return ""
  }
};


function renderLicenseSection(data) {
  if (data.license === 'Apache License 2.0') {
    return `
    ### Apache License 2.0
    Copyright [2021] [ ${data.username} ]

    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.]`
  } else if (data.license === 'MIT') {
    return `
    ### MIT License
    Copyright <2021> < ${data.username} >
  
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.]`
  } else if (data.license === 'ISC License') {
    return `
    ISC License
    Copyright <2021> < ${data.username} >
  
    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.]`
  }
    return `N/A`
};

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  1. [ Installation Instructions ](#installationInstructions)
  2. [ Mock Up ](#mockUp)
  3. [ Usage ](#usage)
  4. [ Contributions ](#contributions)
  5. [ Test Instructions ](#testInstructions)
  6. [ License ](#license)

  <a name="installationInstructions"></a>
  ## Installation Instructions
  ${data.installationInstructions}

  <a name="mockUp"></a>
  ## Mock Up
  ${data.mockUp}

  <a name="usage"></a>
  ## Usage
  ${data.usage}

  <a name="contributions"></a>
  ## Contributions
  ${data.contributions}

  <a name="testInstructions"></a>
  ## Test Instructions
  ${data.testInstructions}

  <a name="license"></a>
  ## License
  ${renderLicenseBadge(data)}
  ${renderLicenseSection(data)}
  `
};

module.exports = generateMarkdown;
