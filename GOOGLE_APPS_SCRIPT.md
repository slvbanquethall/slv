# Google Apps Script Setup for Contact Form

## Steps to Connect Your Google Sheet

### 1. Open Your Google Sheet
- Go to: https://docs.google.com/spreadsheets/d/1sh-6W92TdEZo20YeQFQcGA7PJmlrcGwTWjYUlTWiolY/edit?usp=sharing

### 2. Create Apps Script
- Click **Extensions** → **Apps Script**
- Delete any default code
- Paste the following code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Mobile', 'Email']);
    }
    
    // Add data row
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.mobile || '',
      data.email || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Deploy the Script
1. Click **Deploy** (top right)
2. Select **New deployment**
3. Choose **Type**: Select "Web app"
4. Under **Execute as**: Select your email
5. Under **Who has access**: Select "Anyone"
6. Click **Deploy**
7. Copy the **Deployment URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

### 4. Update the Contact Form
- Replace the `SHEET_URL` constant in `src/app/contact/page.tsx` with your deployment URL
- This URL will be displayed after deployment

### Notes:
- The script automatically creates headers if the sheet is empty
- Data is recorded with: Timestamp, Name, Mobile, Email
- The form uses `no-cors` mode so responses aren't critical
