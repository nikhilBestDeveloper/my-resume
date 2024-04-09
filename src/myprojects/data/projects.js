const billmateProject = {
  "logoImage": "billmate.png",
  "title": "Billmate",
  "description": "This app is designed for business owners who prioritize security and need an offline solution for billing. It allows owners to manage bills without relying on the internet, ensuring data remains secure on their devices. With features for managing groups, services, employees, and customers, all information stays locally stored for maximum security. Owners can create backup files for added peace of mind, saving them wherever they choose. Plus, with the option to backup to Google Drive, they have an extra layer of security. The app also offers reporting features for analyzing data day-wise, employee-wise, or customer-wise. Its straightforward design, built with Kotlin, Jetpack Compose for Android, ensures ease of use while maintaining top-notch security standards.",
  "techStack": [
    {
      "name": "Android",
      "logo": "android_logo.png"
    },
    {
      "name": "Kotlin",
      "logo": "kotlin_logo.png"
    },
    {
      "name": "Lifecycle"
    },
    {
      "name": "Jetpack Compose"
    },
    {
      "name": "Room database using ksp"
    },
    {
      "name": "File providers and content providers"
    },
    {
      "name": "Google Drive/Login SDK",
      "logo": "drive_logo.png"
    },
    {
      "name": "Google SDK",
      "logo": "google_logo.png"
    },
    {
      "name": "HTTP client"
    },
    {
      "name": "Google Auth client",
      "logo": "google_logo.png"
    }
  ],
  "links": [
    {
      "url": "https://www.dropbox.com/scl/fo/hyq39e6wja0rxfxccvf08/AAE9T36HFrf1tAkuGhHlTfg?rlkey=qia906ifyph8cubxb083nuvnj&dl=0",
      "label": "Dropbox link"
    }
  ],
  "screenshotsFolder": {
    "name": "billmate_snapshots",
    "size": 12,
    "orientation": "portrait",
    "extension": "jpg"
  },
  "timeline": {
    "start": "February 2024",
    "end": "April 2024"
  },
  "technicalChallenges": [
    "Implementation of offline functionality",
    "Ensuring security measures for data storage",
    "Integration with Google Drive for backup",
    "Development of reporting features",
    "Integration with payment gateway API"
  ],
  "features": {
    "Group Management": [
      "Ability to create new groups",
      "Edit existing group details",
      "Delete groups"
    ],
    "Service Management": [
      "Add new services",
      "Edit existing service details",
      "Delete services"
    ],
    "Employee Management": [
      "Add new employees",
      "Edit existing employee details",
      "Delete employees"
    ],
    "Customer Management": [
      "Add new customers",
      "Edit existing customer details",
      "Delete customers"
    ],
    "Backup and Restore": [
      "Create backup files for data",
      "Save backup files locally",
      "Option to backup to Google Drive",
      "Restore data from backup"
    ],
    "Reporting": [
      "Generate specialized reports",
      "View reports in graphs and numbers",
      "Customize reports by date, customer, and employee"
    ]
  }
};

const adminMeraDoctorProject = {
  "logoImage": "admin_mera_doctor_logo.ico",
  "title": "Mera Doctor \n Admin App",
  "description": "The Admin App provides a web-based interface for administrators to manage users, appointments, and doctors.",
  "techStack": [
    {
      "name": "ReactJS",
      "logo": "react_logo.png"
    },
    {
      "name": "Tailwind CSS",
      "logo": "tailwind_logo.png"
    }
  ],
  "links": [],
  "screenshotsFolder": {
    "name": "mera_doctor_admin_snapshots",
    "size": 4,
    "orientation": "landscape",
    "extension": "png"
  },
  "timeline": {
    "start": "January 2024",
    "end": "May 2024"
  },
  "technicalChallenges": [],
  "features": {
    "Admin App": [
      "Web-based interface for managing users, appointments, and doctors",
      "Add and update doctor information"
    ]
  }
};

const doctorMeraDoctorProject = {
  "logoImage": "doctor_app_logo.png",
  "title": "Mera Doctor \n Doctor App",
  "description": "The Doctor App is designed for doctors to manage their appointments and interact with patients.",
  "techStack": [
    {
      "name": "Android",
      "logo": "android_logo.png"
    },
    {
      "name": "Kotlin",
      "logo": "kotlin_logo.png"
    },
    {
      "name": "Retrofit"
    },
    {
      "name": "Firebase Crashlytics",
      "logo": "firebase_logo.png"
    }
  ],
  "links": [
    {
      "url": "https://www.dropbox.com/scl/fo/5unopbzgeczjo0tra3iqc/AEJrAOzq8Jtt_Y8NytavWR0?rlkey=6xek89uwak7m4phli0p34k4ro&dl=0",
      "label": "Android App Link"
    }
  ],
  "screenshotsFolder": {
    "name": "doctor_app_snapshots",
    "size": 17,
    "orientation": "landscape",
    "extension": "jpg"
  },
  "timeline": {
    "start": "January 2024",
    "end": "May 2024"
  },
  "technicalChallenges": [],
  "features": {
    "Doctor App": [
      "Manage appointments",
      "Interact with patients",
      "Receive notifications"
    ]
  }
};

const patientMeraDoctorProject = {
  "logoImage": "patient_app_logo.png",
  "title": "Mera Doctor \n Patient App",
  "description": "The Patient App enables users to schedule appointments with doctors, receive appointment reminders, and manage their medical records.",
  "techStack": [
    {
      "name": "Android",
      "logo": "android_logo.png"
    },
    {
      "name": "Kotlin",
      "logo": "kotlin_logo.png"
    },
    {
      "name": "Retrofit"
    },
    {
      "name": "Firebase Crashlytics",
      "logo": "firebase_logo.png"
    }
  ],
  "links": [
    {
      "url": "https://www.dropbox.com/scl/fo/5unopbzgeczjo0tra3iqc/AEJrAOzq8Jtt_Y8NytavWR0?rlkey=6xek89uwak7m4phli0p34k4ro&dl=0",
      "label": "Android App Link"
    }
  ],
  "screenshotsFolder": {
    "name": "patient_app_snapshots",
    "size": 13,
    "extension": "jpg"
  },
  "timeline": {
    "start": "January 2024",
    "end": "May 2024"
  },
  "technicalChallenges": [],
  "features": {
    "Patient App": [
      "Schedule appointments with doctors",
      "Receive appointment reminders",
      "Manage medical records"
    ]
  }
};
const projects = [
  billmateProject,
  adminMeraDoctorProject,
  doctorMeraDoctorProject,
  patientMeraDoctorProject
]


export default projects