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
    githubUrl: undefined, // Add repository URL when available
    architectureDiagram: '/src/assets/images/AI_Powered_Learning_Ecosystem_Microsoft_Fabric.jpg',
    coverImage: '/src/assets/images/AI_Powered_Learning_Ecosystem_Microsoft_Fabric.jpg',
    architectureCaption: 'Microsoft Fabric Medallion Architecture & AI Data Agent Flow',
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
    subtitle: 'End-to-End Incremental Lakehouse Pipeline',
    category: 'Azure Data Engineering',
    featured: true,
    shortDescription:
      'Built an automated incremental data engineering pipeline to process NYC Yellow Taxi trip data using Azure Databricks, PySpark, Delta Lake and Unity Catalog.',
    problem:
      'Unstructured raw data, a strict two-month vendor reporting lag, duplicate processing, and historical taxi zone changes created severe data bottlenecks and unreliable analytics.',
    objectives: [
      'Eliminate duplicate processing and automate incremental ingestion.',
      'Handle schema drift and historical changes using Slowly Changing Dimensions (SCD Type 2).',
      'Secure data assets and lineage tracking with Unity Catalog on ADLS Gen2.',
      'Expose analytics-ready Gold tables for dynamic fleet routing and demand forecasting.'
    ],
    solution:
      'Implemented a scalable Medallion Architecture (Bronze → Silver → Gold) leveraging Azure Databricks. Automated incremental processing using PySpark and Delta Lake change data capture. Configured SCD Type 2 logic for taxi zones to accurately preserve historical attributes across date boundaries. Managed unified governance with Databricks Unity Catalog and orchestrated multi-task Databricks Workflows.',
    businessImpact: [
      'Reliable historical reporting with zero duplicate record anomalies.',
      'Analytics-ready Gold datasets accessible in sub-second query latency.',
      'Improved query performance via Delta partitioning, Z-Ordering, and Liquid Clustering.',
      'Actionable decision support for demand forecasting, revenue optimisation, and fleet deployment planning.'
    ],
    technologies: [
      'Azure Databricks',
      'PySpark',
      'Delta Lake',
      'Unity Catalog',
      'ADLS Gen2',
      'Databricks Workflows',
      'SCD Type 2',
      'Medallion Architecture'
    ],
    githubUrl:
      'https://github.com/ziaul-akash/Enterprise-Mobility-Data-Engine-End-to-End-Incremental-ETL-with-Azure-Databricks',
    architectureDiagram: '/src/assets/images/Enterprise_Mobility_Data_Engine_solution_architecture.jpg',
    coverImage: '/src/assets/images/Enterprise_Mobility_Data_Engine_solution_architecture.jpg',
    architectureCaption: 'Azure Databricks Incremental Lakehouse Pipeline & Unity Catalog Architecture',
    dataIngestion:
      'ADLS Gen2 landing container ingested raw trip files with idempotent processing flags to prevent duplicate processing cycles.',
    transformationAndProcessing:
      'PySpark transformations enforce data quality constraints, schema validation, and SCD Type 2 dimension merge logic to handle zone boundary evolution.',
    storageAndDataModelling:
      'Delta Lake format with Unity Catalog metadata management. Bronze preserves raw data, Silver enforces schema and deduplication, and Gold stores aggregated trip KPIs.',
    dataOrchestration:
      'Databricks Workflows & Jobs orchestration with automated retry policies, cluster auto-scaling, and execution telemetry.',
    securityAndGovernance:
      'Unity Catalog granular column and row-level access control, unified data lineage tracking, and ADLS Gen2 managed identity integration.',
    analyticsAndImpact:
      'Provides downstream data scientists and dispatch analysts with curated Gold tables supporting surge demand prediction and fleet optimization.'
  },
  {
    id: 'pandemicvision',
    title: 'PandemicVision',
    subtitle: 'End-to-End Data Intelligence Platform',
    category: 'Azure Data Engineering',
    featured: true,
    shortDescription:
      'Developed an end-to-end cloud data engineering pipeline using Microsoft Azure to integrate, process and analyse COVID-19 data from ECDC and population reference datasets.',
    problem:
      'COVID-19 statistics were severely fragmented across external REST APIs and semi-structured cloud repositories, making data integration, population-adjusted analysis, and timely epidemiological reporting complex and inefficient.',
    objectives: [
      'Automate extraction from disparate public health APIs and storage endpoints.',
      'Normalize multi-country metrics against standard population reference datasets.',
      'Build a robust automated hybrid transformation pipeline (PySpark & HDInsight Hive SQL).',
      'Deliver interactive visual analytics for country-level infection rate comparisons.'
    ],
    solution:
      'Designed an automated Azure data pipeline to ingest, store, transform and enrich datasets using Azure Data Factory, ADLS Gen2, Databricks (PySpark) and HDInsight (Hive SQL). Loaded curated data into Azure SQL Database and developed interactive Power BI dashboards to visualise COVID-19 trends, country-level comparisons and population-adjusted metrics.',
    businessImpact: [
      'Centralised public health data ingestion across global reporting sources.',
      'Reliable normalization eliminating discrepancies in per-capita incidence calculations.',
      'Automated scheduled processing pipelines with comprehensive ADF monitoring.',
      'Interactive Power BI executive dashboards enabling instant cross-country comparative reporting.'
    ],
    technologies: [
      'Azure Data Factory',
      'ADLS Gen2',
      'Azure Databricks',
      'PySpark',
      'Azure HDInsight',
      'Hive SQL',
      'Azure SQL Database',
      'Power BI'
    ],
    githubUrl:
      'https://github.com/ziaul-akash/PandemicVision-End-to-End-Data-Intelligence-Platform',
    architectureDiagram: '/src/assets/images/pandemic_vision_covid19_solution_architecture.png',
    coverImage: '/src/assets/images/pandemic_vision_covid19_solution_architecture.png',
    architectureCaption: 'PandemicVision Multi-Stage Azure Data Factory & PySpark Architecture',
    dataIngestion:
      'Azure Data Factory copy activities extracting daily feeds from ECDC HTTP APIs and population reference files into ADLS Gen2 raw zones.',
    transformationAndProcessing:
      'Azure Databricks PySpark notebooks for complex transformations alongside HDInsight Hive SQL jobs for legacy analytical cross-checks.',
    storageAndDataModelling:
      'ADLS Gen2 multi-tier storage backing Azure SQL Database staging and production analytical schemas.',
    dataOrchestration:
      'Azure Data Factory scheduled triggers, dependency handling, and pipeline alerts for failure management.',
    securityAndGovernance:
      'Azure Key Vault for credential and connection string secrets, Azure Active Directory RBAC permissions.',
    analyticsAndImpact:
      'Power BI dashboards visualizing infection trajectories, mortality rates per 100k population, and testing velocity.'
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
    architectureDiagram: '/src/assets/images/salesstream_solution_architecture.png',
    coverImage: '/src/assets/images/salesstream_solution_architecture.png',
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
