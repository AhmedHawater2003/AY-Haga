import { Badge } from "@mantine/core";

export const DonationDetails = [
  {
    id: 1,
    title: "Winter Jackets",
    summary: "A warm winter jacket suitable for adults.",
    category: "Clothes",
    primaryDetails: {
      Type: "Jacket",
      Age: "35",
      Gender: "Male",
      Season: "Winter",
      Material: "Wool",
      Quantity: 25,
    },
    organization: "Alexandria Community Center",
    additionalDetails: "Nothing",
    image:
"https://tse4.mm.bing.net/th?id=OIP.dDGxkbK-mtbGnSzgaOy6twHaEK&pid=Api&P=0&h=220",  },
  {
    id: 2,
    title: "Children's T-shirts",
    summary: "Colorful t-shirts for children of various ages.",
    category: "Clothes",
    primaryDetails: {
      Type: "T-shirt",
      Age: "8",
      Gender: "Female",
      Season: "Summer",
      Material: "Cotton",
      Quantity: 100,
    },
    organization: "Egyptian Red Crescent",
    additionalDetails: "Nothing",
    image:
"https://tse3.mm.bing.net/th?id=OIP.oWdOhc0RxBGDAfuqpstO-wHaED&pid=Api&P=0&h=220",  },
  {
    id: 3,
    title: "Notebooks",
    summary: "Notebooks for students.",
    category: "School Supplies",
    primaryDetails: {
      'Sub Category' : "Stationary",
      Type: "Notebook",
      AmountRequested: 100,
    },
    organization: "Nile Education Initiative",
    additionalDetails: "Nothing",
    image:
"https://tse1.mm.bing.net/th?id=OIP.Ujrfw5kvZoo_O4aVv26qywHaE8&pid=Api&P=0&h=220",  },
  {
    id: 4,
    title: "Mathematics Textbook",
    summary: "Comprehensive textbook covering various mathematical concepts.",
    category: "School Supplies",
    primaryDetails: {
      'Sub Category' : "Books",
      Name: "Mathematics Textbook",
      Author: "John Smith",
      Language: "English",
      Edition: "5th Edition",
      Summary: "Covers topics such as algebra and geometry.",
      Quantity: 50,
    },
    organization: "Cairo STEM Academy",
    additionalDetails: "Nothing",
    image:
"https://tse2.mm.bing.net/th?id=OIP.ClhOBdF12EcsuwxkQ2arvAHaKs&pid=Api&P=0&h=220",  },
  {
    id: 5,
    title: "Stuffed Teddy Bear",
    summary: "Soft and cuddly teddy bear for children.",
    category: "Toys",
    primaryDetails: {
      'Sub Category' : "Stuffed Toys",
      Type: "Stuffed animals",
      Age: "5",
      Gender: "Girl",
      Quantity: 50, 
    },
    organization: "Hope Haven Orphanage",
    additionalDetails: "Nothing",
    image:
"https://tse4.mm.bing.net/th?id=OIP.4DxB_-F37GtzxXnT9_C9uwHaFS&pid=Api&P=0&h=220",  },
  {
    id: 6,
    title: "Basketball",
    summary: "Standard size basketball for outdoor play.",
    category: "Toys",
    primaryDetails: {
      'Sub Category' : "Sports",
      Type: "Balls",
      Age: "11",
      Gender: "Boy",
      Quantity: 10,
    },
    organization: "Tanta Orphanage",
    additionalDetails: "Nothing",
    image:
"https://tse3.mm.bing.net/th?id=OIP.S-Tsi8pLvKKPSJ2FwdOkDwHaFj&pid=Api&P=0&h=220",  },
  {
    id: 7,
    title: "Grapes",
    summary: "Fresh fruits",
    category: "Food",
    primaryDetails: {
      'Sub Category' : "Fruits & Vegetables",
      ItemName: "Grapes",
      Quantity: "50 kg",
    },
    organization: "57357 Hospital",
    additionalDetails: "Nothing",
    image:
"https://tse2.mm.bing.net/th?id=OIP.UjJWFFyvjaTVscGftWC8hgHaFt&pid=Api&P=0&h=220",  },
  {
    id: 8,
    title: "Canned Tuna",
    summary: "Canned tuna in oil.",
    category: "Food",
    primaryDetails: {
      'Sub Category':"Canned Foods",
      ItemName: "Canned Tuna",
      Quantity: "100 cans",
    },
    organization: "Hurghada Community Center",
    additionalDetails: "Nothing",
    image:
"https://tse3.mm.bing.net/th?id=OIP.tah1xIYSDf9LwUyX4JUnRAHaEK&pid=Api&P=0&h=220",  },
  {
    id: 9,
    title: "Wheelchair",
    summary: "Standard wheelchair suitable for adults.",
    category: "Medical Supplies",
    primaryDetails: {
      'Sub Category': "Medical Equipment",
      DeviceType: "Wheelchair",
      Use: "Mobility Aid for disabled individuals",
      Quantity: "3",
    },
    organization: "Elderly Care Foundation",
    additionalDetails: "Nothing",
    image:
"https://tse4.mm.bing.net/th?id=OIP.5xCW2ResXrT-2GLZsyvT3wHaHa&pid=Api&P=0&h=220",  },
  {
    id: 10,
    title: "Insulin",
    summary: "Injection for diabetes management.",
    category: "Medical Supplies",
    primaryDetails: {
      'Sub Category' :"Medication",
      DeviceType: "non",
      Use: "Medication for diabetes management",
      Quantity: "25 vials",
    },
    organization: "World Health Organization",
    additionalDetails: "Nothing",
    image:
"https://tse4.mm.bing.net/th?id=OIP.9coBAnA8UhhMfwLtgF6n6AHaD4&pid=Api&P=0&h=220",  },

  {
    id: 11,
    title: "Digital Thermometer",
    summary: "Digital thermometer for temperature measurement.",
    category: "Medical Supplies",
    primaryDetails: {
      'Sub Category' : "Medical Devices ",
      DeviceType : "Digital Thermometer",
      Use: "Measuring body temperature.",
      Quantity: "50 units",
    },
    organization: "Dar Al-Salam Retirement Home",
    additionalDetails: "Nothing",
    image:
"https://tse2.mm.bing.net/th?id=OIP.Wg8ZrR5GGBHMm3MuyQGGUAHaE3&pid=Api&P=0&h=220",  },

  
  {
    id: 12,
    title: "Blood Donation",
    summary: "Urgent need for blood donation.",
    category: "Blood Donations",
    badges: (
      <>
        <Badge color="red">URGENT</Badge>
      </>
    ),
    primaryDetails: {
      'Patient Name': "Ahmed Ali",
      'Blood Type' : "O+",
      'Hospital Name' : "Cairo University Hospital",
      'Hospital Area' : "Cairo",
      Governorate: "Cairo",
      'Hospital Address': "123 Hospital Street, Giza",
    },
    organization: "Cairo Medical Center",
    additionalDetails: "Nothing",
    image:
"https://tse3.mm.bing.net/th?id=OIP.lQy7alhScQT29Hu39yS_JAHaEo&pid=Api&P=0&h=220",  },

  {
    id: 13,
    title: "Blood Donation",
    summary: "Emergency blood donation request.",
    category: "Blood Donations",
    badges: (
      <>
        <Badge color="red">URGENT</Badge>
      </>
    ),
    primaryDetails: {
      'Patient Name': "Fatma Omar",
      'Blood Type': "A-",
      'Hospital Name': "Alexandria Main Hospital",
      'Hospital Area': "El Attarin",
      Governorate: "Alexandria",
      'Hospital Address': "456 Hospital Street, Alexandria",
    },
    organization: "57357 Hospital",
    additionalDetails: "Nothing",
    image:
"https://tse3.mm.bing.net/th?id=OIP.aovDTvyfL--zjQxczUd1SQHaEK&pid=Api&P=0&h=220",  },
  

  
];
