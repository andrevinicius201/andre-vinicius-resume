const imageList = ["node.png", "javascript.png", "python.png", "typescript.png"]

const skillsData = [
    {
        category: "Back-end software development",
        skillList: "Javascript (Node.js), Typescript, Python (FastAPI), Test-Driven Development (TDD). Practical experience applying SOLID, Clean Code and Domain-Driven Design (DDD) principles",  
        techImages: ["javascript.png", "node.png", "typescript.png", "fastapi.svg"]
    },
    {
        category: "Cloud Applications and Integration Technologies",
        skillList: "AWS Lambda, GCP Cloud functions, API Gateway, EventBridge, Pub/Sub technologies (Amazon SQS and GCP Pub/Sub). Microsservices and integration patterns, such as CQRS, SAGA and transactional outbox",  
        techImages: ["gcp.svg", "aws.svg"]
    },

    {
        category: "Front-end Software development",
        skillList: "React, Javascript, Tailwind, HTML, CSS",  
        techImages: ["javascript.png", "react.svg", "tailwind-css.svg", "html.svg", "css.svg"]
    },
    
    {
        category: "Application security",
        skillList: "OAuth 2, JWT, Cognito, Social Identity Federation",  
    },
    {
        category: "Devops, application platforms, infrastructure and monitoring/observability",
        skillList: "Strong fundamentals on Networking configuration and security topics (subnets, NACL and statefull firewals). Hands-on experience with EC2, ECS/Fargate, Docker and Kubernetes and Cloudwatch. Experienced in Linux systems and Devops practices, such as Continuous Integration / Continuous Delivery using industry standard technologies (Git, Gitlab, Github actions)",  
        techImages: ["kubernets.svg","docker.svg"]
    },
    {
        category: "Data",
        skillList: "Data ingestion, storage and processing. ETL, Data lake, Data Warehousing. Technologies: Amazon Glue, Apache Spark, Redshift, Google Big Query, Amazon Athena, Quicksight. Experience with MySQL, PostgreSQL, MongoDB, DynamoDB and AWS RDS / Aurora",  
    },
    {
        category: "AI and ML",
        skillList: "Generative AI usage through hubs such as Amazon Bedrock and purpose-built ML services (Amazon Personalize, Rekognition, Comprehend, Polly, Transcribe, Textract)",  
    },
]

module.exports = {skillsData, imageList}