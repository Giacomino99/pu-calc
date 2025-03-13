# Change Log
## Version 1.0:
- Improved style of page menu
- Improved style of all imput elements
- Improved style of all buttons
- Fixed alignment of solution delete popup buttons

## Version 2.0:
- Squashed some bugs  
- Complete table generation rework.  
    - Most tables are now created from Jinja2 macros.  
    - Tables can now be sorted by clicking headers.  
    - Editing information now occurs within display table.  
- Solution details Page.  
    - Solution details page now displays more information.  
    - Solution details page now has comment section.  
    - Information about a solution can now be inputed  
- Materials details Page.  
    - Material details page now displays more information.  
- Database Changes:  
    1. Solutions table has new columns:  
        - vacuum_pressure  
        - vacuum_time  
        - viscosity  
        - comment  
    2. Material table has changed columns:  
        - id -> materialid  
    3. Constituent table has new columns:  
        - hv0_passes  
        - hv0_rpm  
    4. Some models have new methods                
- CSS across entire site simplified.  
- Login and Sign Up pages now have improved style.  
- File structure is better organized.  

## Version 3.0:
### 3.0.0:
- Fixed calculation error when input used more than once  
- Fixed calculation error when input is same as base  
- Cool new dark mode
- Added [Change Log](/changelog)
### 3.1.0:
- Improved database table relationships
- Added Compositions:
    - Added Composition table to database
    - Added Composition creation on solution creation
    - Added Composition tab to header
    - Added Compositions [page](/compositions)
    - Added Composition details [page](/composition-details?id=1)
    - Added new methods to help with Composition creation
- Dark mode now has cool new effects
- Simplified argument retreval for forms
- Added header to change log
### 3.1.1:
- Added base.html as base for all pages
- All pages now use base.html
### 3.2.0:
- Implemented base materials
    - Material model now has base attribute
    - Base attribute can now be set on creation
    - Base attribute can now be edited on the materials management page
    - Base materials are not selected from base attribute
- Edit tables now support checkboxes for boolean attributes
- Implemented composition recreation
    - A list of compositions is now displayeed on the calculator page.
    - Selecting an entry will autofill the table for that solution.