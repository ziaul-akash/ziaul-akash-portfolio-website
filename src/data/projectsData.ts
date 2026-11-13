import { ProjectDetail } from '../types';

export const projectsData: ProjectDetail[] = [
  {
    id: 'ai-powered-learning-ecosystem',
    title: 'AI-Powered Learning Ecosystem',
    subtitle: 'Microsoft Fabric | AI-Powered Analytics | Enterprise Data Platform',
    category: 'Microsoft Fabric',
    featured: true,
    shortDescription:
      'Architected and implemented an end-to-end AI-powered Learning Ecosystem Data Platform using Microsoft Fabric, Medallion Architecture and Azure DevOps CI/CD automation.',
    problem:
      'Fragmented enterprise LMS datasets made it difficult for academic leadership to evaluate student engagement and performance trends quickly. Non-technical stakeholders lacked direct SQL skills to query complex relational schemas.',
    objectives: [
      'Centralize LMS events and student progress data into a single Lakehouse.',
      'Implement an automated Medallion Architecture (Bronze, Silver, Gold).',
      'Integrate an AI-powered conversational agent to empower natural language querying.',
      'Implement automated deployment pipelines using Azure DevOps.'
    ],
    solution:
      'Implemented an enterprise Lakehouse platform in Microsoft Fabric. Ingested raw LMS data via Fabric Data Pipelines into OneLake Bronze tables. Built automated PySpark notebooks to cleanse and structure data into Delta Silver tables, and aggregated business metrics into Gold semantic models. Integrated an AI-powered conversational data agent allowing business users to ask questions in plain English and receive instant, governed insights without writing SQL.',
    businessImpact: [
      'Democratised access to enterprise data across non-technical academic staff.',
      'Accelerated business insights from weekly manual spreadsheets to real-time lakehouse reporting.',
      'Improved learning analytics and intervention tracking for at-risk learners.',
      'Automated deployment workflows via Azure DevOps CI/CD pipelines.',
      'Established a scalable, enterprise foundation for AI-driven decision-making.'
    ],
    technologies: [
      'Microsoft Fabric',
      'OneLake',
      'Lakehouse',
      'Medallion Architecture',
      'Data Pipelines',
      'PySpark',
      'AI Data Agent',
      'Azure DevOps',
      'CI/CD'
    ],
    githubUrl: 'https://github.com/ziaul-akash/AI-Powered-Learning-Ecosystem-Microsoft-Fabric', // Add repository URL when available
    architectureDiagram: '/assets/aistudio/ai_powered_learning_ecosystem_diagram.jpg',
    coverImage: '/assets/aistudio/ai_powered_learning_ecosystem_diagram.jpg',
    architectureCaption: 'Microsoft Fabric Solution Architecture & AI Data Agent Flow',
    dataIngestion:
      'Fabric Data Pipelines orchestrate scheduled extractions from enterprise LMS endpoints directly into OneLake Bronze layer in original Parquet/JSON formats.',
    transformationAndProcessing:
      'Fabric Spark Notebooks transform Bronze data into cleansed, deduplicated, and conforming Delta tables in the Silver layer using PySpark.',
    storageAndDataModelling:
      'Delta Lake on OneLake utilizing Direct Lake mode for Power BI integration. Star schema modelled in the Gold layer with business-ready dimension and fact tables.',
    dataOrchestration:
      'Native Microsoft Fabric Data Pipelines linked to Fabric Monitoring Hub for real-time status telemetry and failure alerts.',
    securityAndGovernance:
      'Microsoft Entra ID role-based access control (RBAC), workspace sensitivity labels, and OneLake data access security.',
    analyticsAndImpact:
      'Direct Lake Power BI semantic models combined with a conversational AI agent that generates accurate answers and visual queries on demand.'
  },
  {
  id: 'enterprise-mobility-data-engine',
    title: 'Enterprise Mobility Data Engine',
    subtitle: 'End-to-End Incremental Data Pipeline | Azure Databricks',
    category: 'Azure Data Engineering',
    featured: true,
    shortDescription:
      'Designed and developed an end-to-end data engineering platform using Azure Databricks, PySpark, Delta Lake and Azure Data Lake Storage Gen2 to process large-scale NYC Taxi & Limousine Commission (TLC) trip records.',
    introductionDetails: [
      'The platform automatically identifies and ingests newly available monthly datasets, processes millions of taxi trip records through a Medallion Architecture, and transforms raw mobility data into analytics-ready Gold datasets.'
    ],
    dataSourceNote:
      'NYC TLC Trip Record Data — Each monthly dataset contains approximately 3.8–5 million records across 21 columns. The platform is designed to retrieve data as it becomes available, typically two months after the trip month.',
    problem:
      'NYC taxi trip data is published as large monthly Parquet files, making it challenging to maintain an up-to-date historical dataset and efficiently analyse mobility patterns.\n\nWithout an automated data processing solution, handling recurring data releases, maintaining historical changes, and preparing reliable datasets for business intelligence requires significant manual effort.\n\nAdditionally, raw trip records do not directly provide the geographical and financial insights needed to understand taxi demand, driver opportunities and revenue trends.',
    objectives: [
      'Automate monthly ingestion of newly available NYC TLC trip datasets.',
      'Build a scalable incremental data pipeline using Azure Databricks and ADLS Gen2.',
      'Implement a Bronze, Silver and Gold Medallion Architecture.',
      'Apply SCD Type 2 to maintain historical dimension changes.',
      'Optimise data storage and analytical query performance using Delta Lake.',
      'Develop aggregated datasets to support mobility analytics, demand forecasting and revenue optimisation.'
    ],
    solution:
      'Implemented a scalable Lakehouse-style data engineering architecture using Azure Data Lake Storage Gen2 and Azure Databricks.',
    solutionWorkflow: [
      {
        stage: 'Source Detection',
        detail: 'Identifies newly available monthly TLC trip datasets.'
      },
      {
        stage: 'Data Ingestion',
        detail: 'Downloads and stores raw Parquet files in ADLS Gen2.'
      },
      {
        stage: 'Bronze Layer',
        detail: 'Preserves ingested source data for historical traceability.'
      },
      {
        stage: 'Silver Layer',
        detail: 'Applies PySpark transformations, schema validation, data cleansing and SCD Type 2 historical tracking.'
      },
      {
        stage: 'Gold Layer',
        detail: 'Produces aggregated business metrics and analytics-ready datasets.'
      },
      {
        stage: 'Analytics',
        detail: 'Makes processed data available for BI reporting and business analysis.'
      }
    ],
    businessImpact: [
      'Automated monthly ingestion of 3.8–5M NYC TLC trip records (21 columns) via ADLS Gen2 & Databricks',
      'Preserved historical taxi zone evolution with SCD Type 2 merge logic and Unity Catalog lineage',
      'Optimised analytical query workloads with Delta Partitioning, Z-Ordering and Liquid Clustering',
      'Enabled driver opportunity analysis, demand forecasting, fleet optimisation and revenue insights'
    ],
    analyticsSummary:
      'Transformed millions of monthly taxi trip records into aggregated datasets that support geographical, operational and financial analysis, establishing a scalable historical data foundation for predictive analytics, demand forecasting and data-driven fleet management.',
    analyticalMetrics: [
      'Total trips and passenger volumes',
      'Average passengers per trip',
      'Average trip distance',
      'Average, minimum and maximum fares',
      'Total revenue',
      'Trip demand and revenue trends by geographical zone'
    ],
    businessApplications: [
      'Driver Opportunity Analysis: Identify high-revenue locations where taxi drivers may have better earning opportunities.',
      'Demand Analysis: Identify high- and low-demand taxi zones to understand mobility patterns.',
      'Targeted Promotions: Help businesses identify underserved areas for location-based promotional campaigns.',
      'Fleet Optimisation: Support decisions about where additional taxis may be required.',
      'Demand Forecasting: Provide historical datasets for analysing seasonal patterns and predicting future demand.',
      'Revenue Optimisation: Understand geographical fare and revenue trends to support better operational decisions.'
    ],
    technologies: [
      'Azure Databricks',
      'PySpark',
      'Delta Lake',
      'ADLS Gen2',
      'Unity Catalog',
      'Databricks Workflows',
      'SCD Type 2',
      'Medallion Architecture',
      'Parquet',
      'Liquid Clustering'
    ],
    technologyGroups: [
      {
        label: 'Cloud & Storage',
        items: ['Microsoft Azure', 'Azure Data Lake Storage Gen2 (ADLS Gen2)']
      },
      {
        label: 'Data Engineering',
        items: ['Azure Databricks', 'PySpark', 'Apache Spark']
      },
      {
        label: 'Data Storage & Modelling',
        items: ['Delta Lake', 'Parquet', 'Medallion Architecture', 'SCD Type 2']
      },
      {
        label: 'Orchestration',
        items: ['Databricks Workflows', 'Databricks Jobs']
      },
      {
        label: 'Governance & Security',
        items: ['Unity Catalog', 'Managed Identity', 'RBAC']
      },
      {
        label: 'Performance Optimisation',
        items: ['Delta Partitioning', 'Z-Ordering', 'Liquid Clustering']
      }
    ],
    githubUrl:
      'https://github.com/ziaul-akash/Enterprise-Mobility-Data-Engine-End-to-End-Incremental-ETL-with-Azure-Databricks',
    architectureDiagram: '/assets/aistudio/enterprise-mobility-data-engine_solution_architecture.jpg',
    coverImage: '/assets/aistudio/enterprise-mobility-data-engine_solution_architecture.jpg',
    architectureCaption: 'Azure Databricks Incremental Lakehouse Pipeline & Unity Catalog Architecture',
    dataIngestion: [
      'Integrated the NYC TLC public trip record dataset as the primary data source.',
      'Automated monthly data availability checks to identify newly published datasets, typically covering the period two months prior.',
      'Downloaded monthly Parquet files into Azure Data Lake Storage Gen2.',
      'Implemented idempotent ingestion logic and processing flags to manage recurring pipeline executions.'
    ],
    transformationAndProcessing: [
      'Developed PySpark-based transformation workflows in Azure Databricks.',
      'Applied schema validation, data cleansing and data quality checks.',
      'Handled missing values, inconsistent records and duplicate business records.',
      'Implemented SCD Type 2 merge logic to preserve historical dimension changes, including taxi zone reference data.',
      'Transformed raw trip records into structured, analytics-ready datasets.'
    ],
    storageAndDataModelling: [
      'Implemented Delta Lake storage using a Medallion Architecture across Bronze (raw monthly trip data), Silver (cleansed, validated and structured Delta tables), and Gold (aggregated trip metrics and business-ready analytical datasets).',
      'Used Delta Lake features to support reliable data updates, historical tracking and efficient analytical workloads.',
      'Applied partitioning, Z-Ordering and Liquid Clustering to optimise data organisation and query execution where appropriate.',
      'Unity Catalog provides centralised metadata management, data discovery and governance.'
    ],
    dataOrchestration: [
      'Used Databricks Workflows and Jobs to automate and manage end-to-end pipeline execution.',
      'Scheduled monthly ingestion and transformation workflows.',
      'Configured task dependencies to maintain the correct processing sequence.',
      'Implemented retry policies and execution monitoring.',
      'Used cluster auto-scaling to support varying monthly data volumes.'
    ],
    securityAndGovernance: [
      'Implemented enterprise-oriented governance and access management practices.',
      'Integrated Unity Catalog for centralised data governance and access management.',
      'Applied granular permissions, including row-level and column-level controls where required.',
      'Used managed identity integration for secure access to ADLS Gen2.',
      'Leveraged Unity Catalog lineage capabilities to improve data traceability.'
    ],
    analyticsAndImpact:
      'The platform establishes a scalable historical data foundation that can support future predictive analytics, demand forecasting and data-driven fleet management.'
  },
  {
    id: 'salesstream',
    title: 'SalesStream',
    subtitle: 'Automated CRM Data Engineering & Business Intelligence',
    category: 'Azure Data Engineering',
    featured: true,
    shortDescription:
      'Designed and developed an end-to-end Azure Data Engineering pipeline to transform raw CRM sales data into analytics-ready business insights.',
    problem:
      'Manual data ingestion, inconsistent CRM data quality, inefficient file storage formats, and complex reporting cycles delayed executive sales insights and generated excessive manual overhead.',
    objectives: [
      'Automate CRM ingestion without operational CRM system impact.',
      'Standardize disparate source files into optimized columnar Parquet and Delta formats.',
      'Integrate secret management, automated failure alerts, and Git source control.',
      'Publish high-performance analytics to Azure Synapse and Power BI.'
    ],
    solution:
      'Built an automated ETL pipeline using Azure Data Factory, Azure Databricks (PySpark), ADLS Gen2, Azure Synapse Analytics and Power BI. Integrated secure secret management with Azure Key Vault, automated email alerts via Azure Logic Apps, Azure Monitor diagnostics, and production Git repository branch deployments.',
    businessImpact: [
      'Automated data ingestion and transformation with zero daily manual intervention.',
      'Substantially reduced data processing and query latency through optimized Delta storage.',
      'Simplified complex regional currency and attribution transformations.',
      'Improved reporting accessibility and business visibility for sales operations.',
      'Enhanced pipeline reliability and operational visibility through proactive alerts.'
    ],
    technologies: [
      'Microsoft Azure',
      'Azure Data Factory',
      'Azure Databricks',
      'PySpark',
      'ADLS Gen2',
      'Azure Synapse Analytics',
      'Power BI',
      'Azure Key Vault',
      'Azure Logic Apps',
      'Azure Monitor',
      'SQL',
      'Git'
    ],
    githubUrl:
      'https://github.com/ziaul-akash/SalesStream-Automated-CRM-Data-Engineering-Business-Intelligence',
    architectureDiagram: '/assets/aistudio/salesstream_solution_architecture.png',
    coverImage: '/assets/aistudio/salesstream_solution_architecture.png',
    architectureCaption: 'SalesStream Enterprise Azure Data Pipeline & Synapse Architecture',
    dataIngestion:
      'Azure Data Factory parameterized pipelines ingesting multi-entity CRM records into ADLS Gen2 raw landing zones.',
    transformationAndProcessing:
      'Modular PySpark transformation jobs executing data cleansing, deduplication, and currency normalization routines.',
    storageAndDataModelling:
      'Layered lake storage on ADLS Gen2 leading to Azure Synapse Analytics dedicated SQL pool star-schema tables.',
    dataOrchestration:
      'ADF event-based and tumbling-window triggers integrated with Logic Apps for immediate error notifications.',
    securityAndGovernance:
      'Zero hardcoded credentials: all connection secrets managed securely via Azure Key Vault; network firewall rules applied.',
    analyticsAndImpact:
      'Executive Power BI dashboards tracking monthly recurring revenue, sales pipeline velocity, and conversion attribution.'
  }

  /* =======================================================================
   * HOW TO ADD A NEW PROJECT (PROJECT 05 TEMPLATE):
   * Simply duplicate the block below, uncomment it, fill in your project data,
   * and save. The website UI will automatically update with your new project!
   * =======================================================================
  ,{
    id: 'project-five-slug',
    title: 'Real-Time IoT Fleet Telemetry Platform',
    subtitle: 'Microsoft Fabric Real-Time Intelligence | Eventstream | KQL',
    category: 'Microsoft Fabric',
    featured: false,
    shortDescription: 'Real-time telemetry ingestion and anomaly detection pipeline using Fabric Eventstream and KQL.',
    problem: 'Fleet managers suffered from 30-minute telemetry delays causing late maintenance actions.',
    objectives: [
      'Ingest 10,000 events/second from connected vehicles',
      'Implement real-time threshold detection using Fabric Activator',
      'Query real-time tables using KQL with sub-second response times'
    ],
    solution: 'Designed an Eventstream pipeline connected to Eventhouse with automated Activator alert triggers.',
    businessImpact: [
      'Prevented critical engine breakdowns with real-time temperature alerts.',
      'Sub-second query latencies on over 50 million monthly sensor events.'
    ],
    technologies: ['Fabric Real-Time Intelligence', 'Eventstream', 'Eventhouse', 'KQL', 'Activator', 'Power BI'],
    githubUrl: 'https://github.com/ziaul-akash/your-project-link',
    architectureCaption: 'Fabric Real-Time Intelligence Architecture with Eventstream and KQL',
    dataIngestion: 'Fabric Eventstream ingestion from Azure Event Hubs streaming endpoints.',
    transformationAndProcessing: 'Streaming transformations and aggregations performed in-flight.',
    storageAndDataModelling: 'Eventhouse KQL database optimized for time-series append-only telemetry.',
    dataOrchestration: 'Native Real-Time Hub continuous ingestion.',
    securityAndGovernance: 'Fabric workspace RBAC and Microsoft Entra ID authentication.',
    analyticsAndImpact: 'Real-Time Power BI dashboards refreshing continuously with KQL direct queries.'
  }
  ======================================================================== */
];
