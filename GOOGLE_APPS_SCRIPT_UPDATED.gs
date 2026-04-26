// Google Apps Script for handling contact form submissions with email notifications
// Deploy as a Web App and replace the SHEET_URL in contact/page.tsx with the deployment URL

const ADMIN_EMAIL = "slvbanquethall@gmail.com";
const SHEET_ID = "1sh-6W92TdEZo20YeQFQcGA7PJmlrcGwTWjYUlTWiolY"; // Add your Google Sheet ID here
const SHEET_NAME = "Sheet1"; // Sheet name in your Google Sheet

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    const { name, email, mobile } = data;
    
    // Validate data
    if (!name || !email || !mobile) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Missing fields" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Save to Google Sheet
    saveToSheet(name, email, mobile);

    // Send email to admin
    sendAdminNotification(name, email, mobile);

    // Send confirmation email to user
    sendUserConfirmation(name, email);

    return ContentService.createTextOutput(JSON.stringify({ success: true, message: "Form submitted successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("Error: " + error);
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Server error: " + error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveToSheet(name, email, mobile) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const timestamp = new Date();
    sheet.appendRow([timestamp, name, email, mobile]);
  } catch (error) {
    Logger.log("Sheet error: " + error);
  }
}

function sendAdminNotification(name, email, mobile) {
  const subject = "New Contact Form Submission - " + name;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #C9974B 0%, #8B6914 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
      </div>
      
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #ddd; border-top: none;">
        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">You have received a new message from your website contact form.</p>
        
        <div style="background: white; padding: 20px; border-left: 4px solid #C9974B; margin: 20px 0;">
          <p style="margin: 0 0 15px 0;"><strong style="color: #C9974B;">Name:</strong><br/>${escapeHtml(name)}</p>
          <p style="margin: 0 0 15px 0;"><strong style="color: #C9974B;">Email:</strong><br/><a href="mailto:${escapeHtml(email)}" style="color: #C9974B; text-decoration: none;">${escapeHtml(email)}</a></p>
          <p style="margin: 0;"><strong style="color: #C9974B;">Phone:</strong><br/>${escapeHtml(mobile)}</p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
          <strong>Submitted on:</strong> ${new Date().toLocaleString('en-IN')}
        </p>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="mailto:${escapeHtml(email)}" style="background: #C9974B; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">Reply to Inquiry</a>
        </div>
      </div>
      
      <div style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
        <p>Grand Vivah Banquet Hall | Hyderabad</p>
      </div>
    </div>
  `;
  
  GmailApp.sendEmail(ADMIN_EMAIL, subject, "", {
    htmlBody: htmlBody,
    name: "Grand Vivah Contact Form"
  });
}

function sendUserConfirmation(name, email) {
  const subject = "Thank You - We Received Your Message | Grand Vivah";
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #C9974B 0%, #8B6914 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0;">Grand Vivah</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Banquet Hall & Decoration Studio</p>
      </div>
      
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #ddd; border-top: none;">
        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
          <strong>Hi ${escapeHtml(name)},</strong>
        </p>
        
        <p style="color: #555; line-height: 1.6; margin-bottom: 15px;">
          Thank you for reaching out to us! We've received your inquiry and really appreciate you getting in touch with Grand Vivah.
        </p>
        
        <p style="color: #555; line-height: 1.6; margin-bottom: 15px;">
          Our team will review your details and get back to you as soon as possible. We're excited to discuss how we can make your event truly memorable!
        </p>
        
        <div style="background: white; padding: 20px; border-left: 4px solid #C9974B; margin: 25px 0;">
          <p style="margin: 0; color: #666;"><strong style="color: #C9974B;">What's Next?</strong></p>
          <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #666;">
            <li style="margin-bottom: 8px;">Explore our venue at <a href="https://slvbanquethall.com" style="color: #C9974B; text-decoration: none;">slvbanquethall.com</a></li>
            <li style="margin-bottom: 8px;">Check out our gallery for decoration styles and ambiance</li>
            <li style="margin-bottom: 0;">Browse our catering menu and event packages</li>
          </ul>
        </div>
        
        <p style="color: #555; line-height: 1.6; margin: 20px 0 15px 0;">
          In the meantime, feel free to explore our website for more details about our services, gallery, and special offerings.
        </p>
        
        <div style="background: #F0F0F0; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center;">
          <p style="margin: 0; color: #666; font-size: 14px;"><strong>Questions?</strong></p>
          <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
            📞 <a href="tel:+919052341300" style="color: #C9974B; text-decoration: none;">+91 90523 41300</a>
          </p>
        </div>
        
        <p style="color: #555; line-height: 1.6; margin-top: 20px;">
          Warm regards,<br/>
          <strong>Grand Vivah Team</strong><br/>
          <span style="color: #999; font-size: 13px;">Making Dreams Come True</span>
        </p>
      </div>
      
      <div style="text-align: center; color: #999; font-size: 12px; margin-top: 20px; padding: 20px; border-top: 1px solid #ddd;">
        <p style="margin: 0 0 5px 0;">Grand Vivah Banquet Hall</p>
        <p style="margin: 0 0 5px 0;">Banjara Hills, Hyderabad</p>
        <p style="margin: 0;">© 2025 Grand Vivah. All rights reserved.</p>
      </div>
    </div>
  `;
  
  GmailApp.sendEmail(email, subject, "", {
    htmlBody: htmlBody,
    name: "Grand Vivah"
  });
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
