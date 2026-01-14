
```mermaid
graph TD
    subgraph User & Data Input
        User
        ManualEntry[Manual Expense Entry]
        FutureOCR["(Future Scope)<br>Receipt Scanning (OCR)"]
    end

    subgraph Frontend ["Client-Side (React.js / Vite)"]
        UI_Dashboard["Dashboard & Visualizations<br>(Chart.js / D3.js)"]
        UI_Entry["Data Input Forms"]
        UI_Insights["Predictions & Recommendations UI"]
    end

    subgraph Backend ["Server-Side (Node.js / Django)"]
        API["API Endpoints (REST/GraphQL)"]
        Auth["User Authentication"]
        Logic["Core Business Logic"]
    end

    subgraph ML_Module ["Machine Learning Core (Python)"]
        DataProc[Data Preprocessing]
        Categorization["1. Automated Categorization<br>(Scikit-learn)"]
        Prediction["2. Predictive Analytics<br>(Forecasting & Anomaly Detection)"]
        Recommendation["3. Personalized Insights Engine"]
    end

    subgraph Database ["Data Storage (MySQL / MongoDB)"]
        DB_User["User Data"]
        DB_Transactions["Transaction Records"]
    end

    %% --- Connections ---
    User --> UI_Entry
    ManualEntry --> UI_Entry
    FutureOCR --> API

    UI_Dashboard <--> API
    UI_Entry <--> API
    UI_Insights <--> API

    API <--> Auth
    API <--> Logic

    Logic <--> DB_Transactions
    Logic <--> DB_User

    Logic --"Raw Transaction Data"--> DataProc
    DataProc --> Categorization
    DataProc --"Historical Data"--> Prediction
    Prediction --"Spending Patterns"--> Recommendation

    Categorization --"Categorized Data"--> Logic
    Prediction --"Forecasts & Warnings"--> Logic
    Recommendation --"Saving Tips"--> Logic

