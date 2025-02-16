# GoMed-Abroad
### README for MBBS Abroad 

## Project Title: MBBS Abroad 

### Description:
This project is a lead generation form for students who are interested in pursuing MBBS abroad. It collects essential information such as name, email, phone number, and the country of interest. The form features a responsive layout, input validation, and a loading spinner upon form submission.

---

### Table of Contents:
1. [Setup Instructions](#setup-instructions)
2. [Features](#features)
3. [Design & Development Process](#design-&-development-process)
4. [Live Demo](#live-demo)
5. [GitHub Repository](#github-repository)

---

### Setup Instructions

1. **Clone the Repository**:
   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/mbbs-abroad-form.git
   ```

2. **Navigate to the Project Directory**:
   After cloning, navigate to the project directory:

   ```bash
   cd mbbs-abroad-form
   ```

3. **Open the Project in a Code Editor**:
   Open the project folder in your preferred code editor (e.g., Visual Studio Code).

4. **Open the `index.html` file**:
   You can now open the `index.html` file in your browser to view and test the form. 

   Alternatively, you can host it on a local server for better development experience:
   
   - If you have Node.js installed, you can use the built-in server:
   
     ```bash
     npx serve .
     ```

     Or use any simple server you prefer.

5. **Dependencies**:
   This project does not require any external dependencies. It only uses vanilla HTML, CSS, and JavaScript. Ensure that your browser supports modern JavaScript features for optimal performance.

---

### Features

- **Responsive Layout**: The form is designed to work seamlessly across devices with different screen sizes.
- **Validation**: Ensures all required fields are filled before submission.
- **Loader**: A loading spinner is shown when the form is being processed to indicate that the user’s request is being handled.
- **Form Reset**: Once the form is successfully submitted, it gets reset to allow for new entries.
- **Simple & Clear UI**: The form features a minimal design with a focus on ease of use.

---

### Design & Development Process

The design and development of the MBBS Abroad Lead Generation Form focused on providing a user-friendly experience while maintaining a responsive layout that caters to various devices. The goal was to create a simple, easy-to-navigate form that enables students to submit their information seamlessly.

#### 1. **Initial Design:**
   I started by sketching a rough layout of the form, considering how I could make it both functional and aesthetically appealing. The color palette was inspired by GoMed's branding (orange and white), which is bright and inviting. The design focuses on simplicity, with clear labels for each input field and proper spacing to ensure users can easily fill out the form.

#### 2. **HTML Structure:**
   The form includes basic input fields for name, email, phone, and country. Each field has proper HTML5 validation (e.g., `required` and `type="email"` for the email field) to ensure that users can’t submit incomplete or incorrect data.

#### 3. **CSS Styling:**
   I used CSS Grid for the layout, ensuring that the form is flexible and adjusts to different screen sizes. The form container has a maximum width for larger screens, and padding is applied for a comfortable user experience. I paid special attention to the focus states of input fields to make the form more interactive.

   To keep the design simple, I used a fixed position for the loader with a transparent background to overlay the screen during form submission.

#### 4. **JavaScript Functionality:**
   I added client-side validation to check if all required fields were filled before submission. Upon clicking submit, a loading spinner is shown to give the user feedback that the form is being processed. After a simulated delay (using `setTimeout`), a success message is shown, and the form is reset for the next user.

#### 5. **Testing and Debugging:**
   After implementing the core functionality, I tested the form on various devices using browser developer tools to ensure responsiveness. I also verified that the form submitted data correctly and that the loader displayed as expected during the submission process.

---

### Live Demo

- [Live Demo Link](https://go-med-abroad.vercel.app/)

---

### GitHub Repository

- [GitHub Repository Link](https://github.com/prashantkumarpro/GoMed-Abroad)

---



