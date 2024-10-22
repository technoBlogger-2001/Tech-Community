export const QUESTIONS_LIST = [
  {
    id: 1,  // Unique identifier for the question
    emp_name: 'Adam Garrison',
    time_ago: '15 hours ago',
    Category_Name: 'Programming',
    Title: 'Teaching high school students various computer systems is a resource for the future',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae risus id diam eleifend dapibus...',
    Tags: ['Discussion', 'Photoshop', 'Analytics'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'It’s a great initiative to introduce students to computing at an early age!',
        Voting_Count: 10,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'I think it’s crucial to teach problem-solving through programming.',
        Voting_Count: 5,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 2,  // Unique identifier for the question
    emp_name: 'Jane Smith',
    time_ago: '1 day ago',
    Category_Name: 'Design',
    Title: 'Designing with Photoshop: Tips and Tricks',
    Description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
    Tags: ['Graphics', 'Photoshop', 'Design'],
    answers: [
      {
        Answer_Id: 3,
        Answer: 'Photoshop has a lot of hidden features that can really speed up workflow!',
        Voting_Count: 20,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 4,
        Answer: 'Utilizing keyboard shortcuts can significantly enhance your efficiency while working in Photoshop.',
        Voting_Count: 15,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 5,
        Answer: 'Layer styles can be a powerful tool to create visually appealing designs without much effort.',
        Voting_Count: 8,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 6,
        Answer: 'Always keep your software updated to take advantage of the latest features and improvements.',
        Voting_Count: 12,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 3,  // Unique identifier for the question
    emp_name: 'Michael Johnson',
    time_ago: '2 days ago',
    Category_Name: 'Technology',
    Title: 'The future of AI in personal technology',
    Description: 'Suspendisse potenti. Nam vel enim nec quam sollicitudin varius a non nisi...',
    Tags: ['AI', 'Technology', 'Innovation'],
    answers: []
  },
  {
    id: 4,
    emp_name: 'Laura Chen',
    time_ago: '3 hours ago',
    Category_Name: 'Networking',
    Title: 'What are the benefits of using a VPN?',
    Description: 'A VPN can enhance privacy and security online by encrypting your internet connection. But what are its other advantages?',
    Tags: ['VPN', 'Security', 'Privacy'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'Using a VPN helps to protect your data from hackers, especially on public Wi-Fi networks.',
        Voting_Count: 15,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'It allows you to bypass geo-restrictions, giving you access to content unavailable in your region.',
        Voting_Count: 8,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: 'A VPN can prevent your internet service provider from tracking your online activities.',
        Voting_Count: 10,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: 'It can improve your online security when accessing sensitive information, like banking details.',
        Voting_Count: 12,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 5,
    emp_name: 'Richard Lee',
    time_ago: '5 hours ago',
    Category_Name: 'Programming',
    Title: 'How does garbage collection work in Java?',
    Description: 'Garbage collection is an automatic memory management feature of Java. But how does it really work behind the scenes?',
    Tags: ['Java', 'Memory Management'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'Java uses several garbage collection algorithms, such as generational and concurrent marking.',
        Voting_Count: 12,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'The garbage collector automatically frees memory by removing objects that are no longer referenced.',
        Voting_Count: 6,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: 'Java runs the garbage collector on a separate thread to minimize application pause time.',
        Voting_Count: 9,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: 'It uses a concept called "reachability" to determine which objects can be collected.',
        Voting_Count: 7,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 6,
    emp_name: 'Emily Carter',
    time_ago: '1 day ago',
    Category_Name: 'Cloud Computing',
    Title: 'What are the key differences between IaaS, PaaS, and SaaS?',
    Description: 'Understanding the different cloud service models is crucial for choosing the right solution. What distinguishes IaaS from PaaS and SaaS?',
    Tags: ['Cloud', 'IaaS', 'PaaS', 'SaaS'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'IaaS provides virtualized computing resources over the internet, while PaaS offers a platform allowing customers to develop applications.',
        Voting_Count: 18,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'SaaS delivers software applications over the internet, eliminating the need for installation and maintenance.',
        Voting_Count: 9,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: 'IaaS users can manage operating systems, storage, and deployed applications.',
        Voting_Count: 11,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: 'PaaS allows developers to focus on coding without worrying about underlying infrastructure.',
        Voting_Count: 10,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 7,
    emp_name: 'David Wilson',
    time_ago: '2 days ago',
    Category_Name: 'Cybersecurity',
    Title: 'What are common types of cyber attacks?',
    Description: 'With the rise of technology, various cyber threats have emerged. What are the most common types of cyber attacks today?',
    Tags: ['Cybersecurity', 'Threats'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'Phishing attacks are one of the most prevalent, tricking users into revealing sensitive information.',
        Voting_Count: 20,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'Ransomware attacks encrypt data and demand payment for its release, posing a significant threat to organizations.',
        Voting_Count: 10,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: 'DDoS attacks overwhelm servers, making websites or services unavailable to users.',
        Voting_Count: 8,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: 'Man-in-the-middle attacks intercept and alter communications between two parties.',
        Voting_Count: 12,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 8,
    emp_name: 'Sarah Johnson',
    time_ago: '3 days ago',
    Category_Name: 'Data Science',
    Title: 'What is the role of data cleaning in data analysis?',
    Description: 'Data cleaning is often overlooked but is critical to accurate data analysis. Why is it important?',
    Tags: ['Data Cleaning', 'Data Analysis'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'Data cleaning ensures that the data is accurate and usable, leading to more reliable analysis outcomes.',
        Voting_Count: 14,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'It helps to identify and correct errors, missing values, and inconsistencies in the dataset.',
        Voting_Count: 7,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: 'Cleaning data reduces noise and increases the efficiency of the analysis process.',
        Voting_Count: 9,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: 'A clean dataset helps improve the accuracy of predictive models and insights.',
        Voting_Count: 6,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 9,
    emp_name: 'Alice Cooper',
    time_ago: '4 days ago',
    Category_Name: 'Artificial Intelligence',
    Title: 'What ethical concerns surround AI technology?',
    Description: 'As AI technology evolves, ethical implications become a major discussion point. What are some ethical concerns?',
    Tags: ['AI', 'Ethics'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'AI bias can lead to discrimination in automated decision-making processes, which is a significant ethical issue.',
        Voting_Count: 16,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'Privacy concerns arise as AI systems often require vast amounts of personal data for training.',
        Voting_Count: 8,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: '',
        Voting_Count: 0,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: '',
        Voting_Count: 0,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 10,
    emp_name: 'Tom Baker',
    time_ago: '5 days ago',
    Category_Name: 'Web Development',
    Title: 'How can I optimize my website for better performance?',
    Description: 'Website performance is critical for user experience. What techniques can be used to optimize web performance?',
    Tags: ['Web Development', 'Performance'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'Minimizing HTTP requests and using asynchronous loading can significantly improve load times.',
        Voting_Count: 13,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'Implementing caching strategies helps to reduce server load and speed up response times for returning users.',
        Voting_Count: 6,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: '',
        Voting_Count: 0,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: '',
        Voting_Count: 0,
        Approve_Flag: 0,
      }
    ]
  },
  {
    id: 11,
    emp_name: 'Mark Thompson',
    time_ago: '6 days ago',
    Category_Name: 'Software Engineering',
    Title: 'What are the principles of Agile methodology?',
    Description: 'Agile methodology emphasizes flexibility and customer satisfaction. What are its core principles?',
    Tags: ['Agile', 'Software Development'],
    answers: [
      {
        Answer_Id: 1,
        Answer: 'Agile promotes iterative development and continuous feedback, which enhances product quality.',
        Voting_Count: 14,
        Approve_Flag: 1,
      },
      {
        Answer_Id: 2,
        Answer: 'Collaboration among cross-functional teams is essential for successful Agile projects.',
        Voting_Count: 5,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 3,
        Answer: '',
        Voting_Count: 0,
        Approve_Flag: 0,
      },
      {
        Answer_Id: 4,
        Answer: '',
        Voting_Count: 0,
        Approve_Flag: 0,
      }
    ]
  }
];





export const TOP_DISCUSSIONS = [
    { Title: 'How to use Angular Services effectively?' },
    { Title: 'Best practices for component communication in Angular' },
    { Title: 'Exploring Angular Material design components' }
  ];
  
  export const DASHBOARD = {
    total_user_count: [{ user_count: 1234 }],
    total_questions_count: [{ Question_count: 567 }],
    total_answer_count: [{ Answer_count: 890 }],
    total_approve_answer_count: [{ Answer_count: 45 }]
  };
  
  export const TOP_RECENT_POSTS = [
    { Title: 'Exploring reactive forms', time_ago: '2 hours ago', emp_name: 'John Doe' },
    { Title: 'Understanding Angular Directives', time_ago: '5 hours ago', emp_name: 'Jane Smith' },
    { Title: 'Lazy loading in Angular', time_ago: '1 day ago', emp_name: 'Michael Johnson' }
  ];
  
  export const TOP_MEMBERS = [
    { emp_name: 'John Doe', No_Of_Questions: 120 },
    { emp_name: 'Jane Smith', No_Of_Questions: 150 },
    { emp_name: 'Michael Johnson', No_Of_Questions: 100 }
  ];
  
  export const TRENDING_TAGS = ['discussion', 'analytics', 'company', 'life', 'computer', 'interview', 'grammar', 'conversion', 'google'];