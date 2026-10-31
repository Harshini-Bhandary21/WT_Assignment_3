# Course Enrollment Form (React)

Client-side form validation with React hooks (useState, useEffect), controlled inputs and reusable components.

## Run
```
npm install
npm run dev      # opens at http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/App.jsx` – page, enrolled students state, confirmation message
- `src/components/EnrollmentForm.jsx` – form state, validation, submit
- `src/components/FormField.jsx`, `SelectField.jsx`, `RadioGroup.jsx` – reusable inputs (props)
- `src/components/CourseSummary.jsx`, `EnrolledList.jsx` – fee summary and list
- `src/utils/validators.js` – all validation rules (10 fields)
