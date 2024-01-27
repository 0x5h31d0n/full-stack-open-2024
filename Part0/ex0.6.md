```mermaid

sequenceDiagram
    participant Browser
    participant Server
   
    browser->>Server: POST  https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    server-->>Browser: status code 201 created
    deactivate Server
    