```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user navigates to the SPA version of the notes app
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file (SPA logic)
    deactivate server

    Note right of browser: The browser executes JavaScript to fetch notes
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON with existing notes
    deactivate server

    Note right of browser: The browser renders the notes list

    Note right of browser: The user writes a note and clicks "Save"
    browser->>browser: Prevent default form submission
    browser->>browser: Add note to local list and re-render notes
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server

    Note right of browser: The page does not reload, the new note is displayed instantly

    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser executes JavaScript to fetch updated data
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON with updated notes
    deactivate server

    Note right of browser: The browser renders the list of notes
```
