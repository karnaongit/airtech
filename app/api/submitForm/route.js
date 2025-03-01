
// // app/api/submitForm/route.js
// import { google } from 'googleapis';

// const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
// const SHEET_NAME = 'Sheet1'; // Replace with your sheet name

// const auth = new google.auth.GoogleAuth({
//   keyFile: 'path/to/your/service-account-key.json', // Path to your JSON key file
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });

// export async function POST(req) {
//   try {
//     const formData = await req.json();

//     const authClient = await auth.getClient();
//     const sheets = google.sheets({ version: 'v4', auth: authClient });

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: SPREADSHEET_ID,
//       range: `${SHEET_NAME}!A:F`, // Adjust the range based on your columns
//       valueInputOption: 'RAW',
//       insertDataOption: 'INSERT_ROWS',
//       resource: {
//         values: [
//           [
//             formData.name,
//             formData.companyName,
//             formData.email,
//             formData.phone,
//             formData.country,
//             formData.questions,
//           ],
//         ],
//       },
//     });

//     console.log('Data written to Google Sheets:', response.data);
//     return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error writing to Google Sheets:', error);
//     return new Response(JSON.stringify({ message: 'Failed to submit form' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }