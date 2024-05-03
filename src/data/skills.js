const imageList = ["node.png", "javascript.png", "python.png", "typescript.png"]

const skillsData = [
    {
        category: "Back-end software development",
        skillList: "Javascript (Node.js), Typescript, Python (FastAPI), Express, Fastify, NestJS, Test-Driven Development (TDD), Jest JS. Practical experience applying SOLID, Clean Code and Domain-Driven Design (DDD) principles. Swagger API documentation",  
        techImages: ["node.png", "javascript.png", "typescript.png", "fastapi.svg", "python.svg", "nest.svg", "jest.svg"]
    },
    {
        category: "Cloud Applications and Integration Technologies",
        skillList: "APIs development. AWS Lambda, GCP Cloud functions, API Gateway, EventBridge, Pub/Sub technologies (Amazon SQS and GCP Pub/Sub) and notifications (Amazon SNS). Microsservices and integration patterns, such as CQRS, SAGA and transactional outbox",  
        techImages: ["aws.svg", "gcp.svg", "lambda.svg", "api_gateway.png", "pubsub.png", "sqs.svg"]
    },

    {
        category: "Front-end Software development",
        skillList: "React, Javascript, Tailwind, HTML, CSS",  
        techImages: ["react.svg", "javascript.png", "tailwind-css.svg", "html.svg", "css.svg"]
    },
    
    {
        category: "Application security",
        skillList: "OAuth 2, JWT, Cognito, Social Identity Federation",  
        techImages: ["oauth.svg", "jwt.png"]
    },
    {
        category: "Devops, application platforms, infrastructure and monitoring/observability",
        skillList: "Strong fundamentals on Networking configuration and security topics (subnets, NACL and statefull firewals). Hands-on experience with EC2, ECS/Fargate, Docker and Kubernetes and Cloudwatch. Experienced in Linux systems and Devops practices, such as Continuous Integration / Continuous Delivery using industry standard technologies (Git, Gitlab, Github actions). Infrastructure as Code (Terraform, Cloudformation)",  
        techImages: ["kubernets.svg","docker.svg","cloudwatch.png", "git.svg", "terraform.svg", "cloudformation.png"]
    },
    {
        category: "Data",
        skillList: "Data ingestion, storage and processing. ETL, Data lake, Data Warehousing. Technologies: Amazon Glue, Apache Spark, Redshift, Google Big Query, Amazon Athena, Quicksight. Experience with MySQL, PostgreSQL, MongoDB, DynamoDB and AWS RDS / Aurora",  
        techImages: ["hadoop.svg", "spark.svg", "glue.png"]
    },
    {
        category: "AI and ML",
        skillList: "Generative AI usage through hubs such as Amazon Bedrock and purpose-built ML services (Amazon Personalize, Rekognition, Comprehend, Polly, Transcribe, Textract)",  
        techImages: ["bedrock.png", "rekognition.jpg"]
    },
]

module.exports = {skillsData, imageList}