import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Jawad',
    lastName:  'Ali',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack and AI Developer',
    avatar:    '/images/avatar.jpg',
    languages: ['English', 'Urdu','Punjabi', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Stay ahead- get the latest updates in AI and Tech delivered straight to your inbox

    </>,
    description: <></>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/jd751',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jawad-ali-746227294/',
    },
    {
        name: 'Medium',
        icon: 'medium',
        link: 'https://medium.com/@jawad751',
    },
   {
        name: 'YouTube',
        icon: 'Youtube',
        link: 'https://www.youtube.com/@jawadali4466',
    },

]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my projects as a ${person.role}`,
    headline: <>Full Stack and AI Developer</>,
    subline: <>I'm a Full Stack and AI Developer specializing in building scalable applications and AI-driven solutions that solve real-world problems.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
 
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a passionate Full Stack and AI Developer with experience in designing and building web applications, machine learning models, and end-to-end AI solutions. My expertise spans across frontend and backend development, as well as implementing intelligent systems that enhance user experiences and optimize workflows. With a strong foundation in programming, data science, and modern frameworks, I am committed to creating innovative and efficient solutions for both businesses and individuals.</>
    },
    /*projects: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelance / Various Companies',
                timeframe: '2018 - Present',
                role: 'FullStack and AI Developer',
           
                achievements: [
                    <>Led the development of a machine learning-based recommendation system for an e-commerce platform, increasing customer retention by 15%.</>,
                    <>Optimized a company's data processing pipeline, reducing processing time by 40% through intelligent automation and infrastructure enhancements.</>,
                    <>Designed and deployed a chatbot system that reduced customer service response time by 30%.</>,
                    <>Implemented an AI-driven fraud detection system that improved accuracy by 25%, reducing false positives and enhancing security measures.</>,
                    <>Automated manual reporting processes, saving the company 20 hours per week in administrative tasks.</>
                ]
                


            
            },
            
        ]
    },
    */
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Leeds, UK',
                description: <>B-Eng (Hons) Electrical and Electronics Engineering</>,
            },
            {
                name: 'University of Oxford, UK',
                description: <>Advanced Diploma in Data and Systems Analytics.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Skills',
        skills: [
            {
                title: 'Python',
                description: <>Proficient in Python with extensive experience in building web applications, data analysis, machine learning models, and automation scripts. Skilled in using popular libraries like Django, Flask, NumPy, Pandas, TensorFlow, and PyTorch to create efficient, scalable, and AI-driven solutions. Whether it’s backend development or AI modeling, Python is my go-to language for writing clean, maintainable code and solving complex problems.</>,
                
                
            },
            
                {
                    title: 'LLM (Large Language Models)',
                    description: <>Extensive experience in working with Large Language Models for natural language processing tasks such as text generation, summarization, and semantic understanding. Skilled in fine-tuning models and integrating them into applications to create AI-driven solutions for a variety of use cases, including chatbots, content generation, and automation tools.</>,
                },
                {
                    title: 'LangChain',
                    description: <>Proficient in using LangChain to develop and deploy applications powered by language models. Experienced in creating conversational agents, integrating LLMs with external tools, and managing memory and context in long-running AI processes. LangChain allows me to build powerful, intelligent applications that leverage language models in diverse workflows.</>,
                },
                {
                    title: 'OpenAI',
                    description: <>Skilled in utilizing OpenAI's APIs for developing AI-based applications, including GPT models for tasks like natural language generation, code assistance, and interactive agents. Experienced in integrating OpenAI models into existing platforms and optimizing them for specific business objectives.</>,
                },
                {
                    title: 'Django',
                    description: <>Proficient in using Django for backend web development, building robust, scalable web applications with an emphasis on security and performance. Skilled in creating RESTful APIs, managing databases, and deploying full-stack applications with Django’s ORM and templating engine. Django is a go-to framework for building maintainable and scalable applications with clean architecture.</>,
                },
                {
                    title: 'API Development & Integration',
                    description: <>Experienced in designing, developing, and integrating RESTful APIs using Django and Flask for web applications. Proficient in ensuring secure and efficient communication between frontend and backend services, managing third-party API integrations, and implementing robust authentication/authorization mechanisms.</>,
                },
                {
                    title: 'Machine Learning',
                    description: <>Hands-on experience in building and deploying machine learning models using frameworks such as TensorFlow, PyTorch, and Scikit-learn. Skilled in data preprocessing, feature engineering, model training, and evaluation. I apply machine learning to solve complex business problems, from recommendation engines to predictive analytics.</>,
                },
                {
                    title: 'Cloud Technologies (AWS, GCP)',
                    description: <>Proficient in deploying and managing cloud infrastructure on AWS and GCP. Experience with services like EC2, S3, Lambda, RDS, and Google Cloud Functions to build scalable, secure, and cost-efficient applications. I leverage cloud platforms for hosting applications, running machine learning models, and managing databases.</>,
                },
                {
                    title: 'Database Management (SQL, NoSQL)',
                    description: <>Experienced in managing and optimizing both relational (PostgreSQL, MySQL) and non-relational (MongoDB, Firebase) databases. Skilled in database design, querying, and performance optimization to ensure data integrity and efficient data handling across web applications and AI models.</>,
                }
            ]
            
        
    }
}

const blog = {
    label: 'Blog',
    title: 'I write about Tech, particularly Software Development and AI',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const projects = {
    label: 'Projects',
    title: 'My projects',
    description: `Dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /projects routes
}



export { person, social, newsletter, home, about, blog, projects };