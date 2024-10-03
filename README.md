Install              - Node.js, Visual Studio, Cypress
Node.js Path Setup   - Properties> Advance System Settings>Environment Variable> System Variable+ Path+ Edit> New> add node file location


npm init             - Create Package.json file
Install Cypress      - npm install cypress --save-dev
npx cypress open     - open cypress app



                        ******* Commands ************

cy.visit(url)       - Visit a remote URL.

cy.get()            - Find DOM elements by selector, or read an alias previously created with the .as() command.

.go()	            - Navigate back or forward using the browser's history.

.wait()         	- Wait a number of milliseconds, or wait for an aliased resource to resolve. 

.click()	        - Click a DOM element.

.dblclick()	        - Double-click a DOM element.

.rightclick()	    - Right click a DOM element.

.type()	            - Type into a DOM element.

.blur()             - Blur a focused element. 

.should()	        - Assert on the state of your application. Assertions are automatically retried until they pass or time out.

.contains()     	- Select a DOM element by text content.

.check()	        - Check checkbox or radio elements.

.uncheck()	        - Uncheck checkbox(es).

.clear()	        - Clear the value of an input or textarea.

.scrollIntoView()	- Scroll an element into view.

.scrollTo('top')/.scrollTo(0, 500)	    - Scroll to a specific position.

.select()	        - Select an <option> within a <select>.

.selectFile()	    - Selects a file in an HTML5 input element, or simulates dragging a file into the browser.

.trigger()	        - Trigger an event on a DOM element.

.invoke()	        - Invoke a function on the previously yielded subject.

.url()	            - Get the URL of the active page.

.title()	        - Get the document.title property of the active page.

.window()	        - Get the window object of the active page.

