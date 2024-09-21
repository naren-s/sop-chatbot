const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');


// Predefined responses with numbers and links for SOP documents
const predefinedResponses = {
  "1": `You selected Module 1: ADRP - Advanced DRP<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115-2/adrp-advan/SOP-5-I-ADRP0001-C_RA_Wrapper_Program_run_in_R12_Instance.pdf" target="_blank">RA Wrapper Program run in R12 Instance</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115-2/adrp-advan/SOP-5-I-ADRP0002-C_ADRP_Substitute_Function.pdf" target="_blank">ADRP Substitute Function</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115-2/adrp-advan/SOP-5-I-ADRP0033-C_RA_ECO_USE_UP.pdf" target="_blank">RA ECO USE UP</a>`,

  "2": `You selected Module 2: AP - Accounts Payable<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ap-account/SOP-5-I-AP0001-C_RA_AP_Supplier_Main.pdf" target="_blank">AP Supplier Maintenance</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ap-account/SOP-5-I-AP0002-C_RA_AP_Invoice_Entry.pdf" target="_blank">AP Invoice Entry</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ap-account/SOP-5-I-AP0005-C_RA_AP_Payments_Proc.pdf" target="_blank">AP Payments Processing</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ap-account/SOP-5-I-AP0007-C_RA_AP_VAT_Tax.pdf" target="_blank">AP VAT Tax</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ap-account/SOP-5-I-AP0009-C_RA_AP_Standard_Repo.pdf" target="_blank">AP Standard Reports</a>`,

  "3": `You selected Module 3: AR - Accounts Receivable<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ar-account/SOP-5-I-AR0001-C_RA_AR_Customer_Addi.pdf" target="_blank">AR Customer Addition</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ar-account/SOP-5-I-AR0002-C_RA_AR_Cash_Applicat.pdf" target="_blank">AR Cash Applications</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ar-account/SOP-5-I-AR0005-C_RA_Manual_Invoice.pdf" target="_blank">Manual Invoice</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ar-account/SOP-5-I-AR0010-C_RA_AR_Standard_Repo.pdf" target="_blank">AR Standard Reports</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ar-account/SOP-5-I-AR0012-C_Consolidated-Billin.pdf" target="_blank">Consolidated Billing Invoice</a>`,

  "4": `You selected Module 4: ATO - Assemble to Order<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ato-assemb/SOP-5-I-ATO0001-C_RA_ATO_Assemble_to.pdf" target="_blank">ATO Assemble to Order</a>`,

  "5": `You selected Module 5: BIL - Project Billing<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bil-projec/SOP-5-I-BIL0001-C_RA_DAS_Oracle_Proj.pdf" target="_blank">Project Billing</a>`,

  "6": `You selected Module 6: BOM - Bill of Material<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bom-bill-o/SOP-5-I-BOM0001-C_RA_BOM_Routings_Cr.pdf" target="_blank">BOM Routings Create & Maintain</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bom-bill-o/SOP-5-I-BOM0002-C_RA_BOM_Creation.pdf" target="_blank">BOM Maintenance</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bom-bill-o/SOP-5-I-BOM0003-C_RA_Mfg_Lead_Times.pdf" target="_blank">Manufacturing Lead Times</a>`,
  
  "7": `You selected Module 7: BSM - Buy-Sell Model<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bsm-buy-se/SOP-5-I-BSM0001-C_RA_-BSM_Direct_Shi.pdf" target="_blank">BSM Direct Shipment</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bsm-buy-se/SOP-5-I-BSM0002-C_RA_BSM-RMA-Order-E.pdf" target="_blank">BSM RMA Order Entry</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bsm-buy-se/SOP-5-I-BSM0003-C-BSM-Ship-to-Foreca.pdf" target="_blank">BSM Ship to Forecast</a>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/bsm-buy-se/SOP-5-I-BSM0004-C_RA_BSM-SPICE-Repor.pdf" target="_blank">BSM SPICE Report Catalog</a>`,

  "8": `You selected Module 8: CON - Project Contracts<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/con-projec/SOP-5-I-CON0001-C_RA4_Oracle_Project.pdf" target="_blank">Oracle Projects Contract Entry</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/con-projec/SOP-5-I-CON0002-C_RMA--Repairs-and-W.pdf" target="_blank">Oracle Projects RMA Repairs & Warranty</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/con-projec/SOP-5-I-CON0003-C_RB_OracleProjectsC.pdf" target="_blank">Project Contracts Entry with Billing Method</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/con-projec/SOP-5-I-CON0004-C_RA_OracleProjectsC.pdf" target="_blank">Contract Terms Library - Articles Setup</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/con-projec/SOP-5-I-CON0005-C_RA-OracleProjectsC.pdf" target="_blank">Oracle Projects Contract Inquiry</a>`,

  "9": `You selected Module 9: CST - Cost<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/11.5.10-Updates-Cost-Accounting-Repo.pdf" target="_blank">Updates Cost Accounting Report Schedule</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/11.5.10-Updates-Cost-Accounting-Repo.pdf" target="_blank">Cost_Month_End</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/SOP-5-I-CST0002-C_RA2_Financial_Clos.pdf" target="_blank">Cost Maintenance</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/SOP-5-I-CST0002-C_RA2_Financial_Clos.pdf" target="_blank">Financial Close of Work Orders</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/SOP-5-I-CST0003-C_RA_Copy_Cost_Type_.pdf" target="_blank">Copy Cost Type Information</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/SOP-5-I-CST0004-C_RA_Cost_Reports.pdf" target="_blank">Cost Reports</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/SOP-5-I-CST0005-C_RA_Automated_Cost_.pdf" target="_blank">Automated Cost Update</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/SOP-5-I-GL0017-C_RA_Reclassification_of_COGS_Journal_Automation.pdf" target="_blank">Reclassification of COGS Journal Automation</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/cst-cost/COST_RPT_0018_Sanmina-Purchase-Price.pdf" target="_blank">Sanmina Purchase Price Variance (with FX) Report</a>`,

  "10": `You selected Module 10: DIS - Discoverer<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/dis-discov/SOP-5-I-DIS0001-C_RA_Oracle_Discover.pdf" target="_blank">Oracle Discoverer Query User</a>`,

  "11": `You selected Module 11: DRP - Distribution Requirements Planning<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/drp-distri/SOP-5-I-DRP0001-C_RA_DRP_Plan_SetUp.pdf" target="_blank">DRP Plan Setup</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/drp-distri/SOP-5-I-DRP0002-C-RA_Master_Demand.pdf" target="_blank">Master Demand Schedule</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/drp-distri/SOP-5-I-DRP0003-C-RA_DRP_Workbench.pdf" target="_blank">DRP Workbench - Users Guide</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/drp-distri/SOP-5-I-DRP0003-PRJ-C_RA_DRP_Workben.pdf" target="_blank">Oracle Projects DRP Workbench-User's Guide</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/drp-distri/SOP-5-I-DRP0005-C_ECO-Reschedule-Opp.pdf" target="_blank">ECO Reschedule Opportunities Process</a>`,

  "12": `You selected Module 12: EDW - Enterprise Data Warehouse<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/edw/ENO-Claims-Massupload-Too-Templatel..xls" target="_blank">ENO Claims Mass Upload Tool Template</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/edw/SOP-5-I-EDW0001_RA_Enterprise_Data_W.pdf" target="_blank">Enterprise_Data_Warehouse</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/edw/SOP-5-I-EDW0002-C_RA_-E-O-Claim-Mana.pdf" target="_blank">E&O Claim Mgmt Tool</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/edw/SOP-5-I-EDW0003-C_RA_EO-Claim-Mass-U.pdf" target="_blank">E&O Claim Mass Upload Tool</a>`,

  "13": `You selected Module 13: ENG - Engineering<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/eng-engine/SOP-5-I-ENG0001-C_RA_Engineering_ECO.pdf" target="_blank">Engineering ECO Creation And Implementation</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/eng-engine/SOP-5-I-ENG0002-C_RA_Engineering_ECO.pdf" target="_blank">ECO Mass Change</a>`,

  "14": `You selected Module 14: FA - Fixed Assets<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fa-fixed-a/SOP-5-I-FA0002-C_RA_FA_Assets_Retire.pdf" target="_blank">FA Asset Retirements</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fa-fixed-a/SOP-5-I-FA0003-C_RA_FA_Depreciation.pdf" target="_blank">FA Depreciation</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fa-fixed-a/SOP-5-I-FA0008-C_RA_FA_Mass_Addition.pdf" target="_blank">FA Mass Additions</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fa-fixed-a/SOP-5-I-FA0009-C_RA_FA_Additions_and.pdf" target="_blank">FA Additions and Quick Additions</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fa-fixed-a/SOP-5-I-FA0010-C_RA_FA_Asset_Mainten.pdf" target="_blank">FA Asset Maintenance</a>`,

"15": `You selected Module 15: FCS - Forecast<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fcs-foreca/SOP-5-I-FCS0001-C_RA_Forecast_Creati.pdf" target="_blank">Forecast Creation</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fcs-foreca/SOP-5-I-FCS0002-C--Oracle-Forecast-C.pdf" target="_blank">Forecast Consumption Program</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fcs-foreca/SOP-5-I-FCS0003_RA_Electronic_Forecast_Approval_Process.pdf" target="_blank">Forecast Creation OR Approval Process</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/fcs-foreca/SOP-5-I-FCS0004-C_RA_Forecast_Modify_OR_Approval_Process.pdf" target="_blank">Forecast Modify OR Approval Process</a>`,

"16": `You selected Module 16: GL - General Ledger<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0001-C_RA_GL_Journal_Entry.pdf" target="_blank">GL Journal Entry</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0002-C_RA_Maintain_Chart_o.pdf" target="_blank">Maintain Chart of Accounts</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0005-C_RA_GL_Journal_Posti.pdf" target="_blank">GL Journal Posting</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0006-C_RA_GL_Journal_Rever.pdf" target="_blank">GL Journal Reversing</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0012-C_RA_Standard_Reports.pdf" target="_blank">Standard Reports</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0013-C_RA_GL_BSS.pdf" target="_blank">GL Balance Sheet Scorecard</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0014-C_RA_BSS_Reports.pdf" target="_blank">BSS Reports</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0016-C_RA_GL_Journal_Notif.pdf" target="_blank">GL Journal Notification and Approval Process</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/gl-general/SOP-5-I-GL0017-C_RA_Reclassification_of_COGS_Journal_Automation.pdf" target="_blank">Reclassification of COGS Journal Automation</a>`,

"17": `You selected Module 17: ICE - InterCompany EDI<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ice-interc/SOP-5-I-ICE0001-C_RA_InterCompanyEDI.pdf" target="_blank">InterCompany EDI</a>`,

"18": `You selected Module 18: INQ - Inquiry<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inq-inquir/SOP-5-I-AP00INQ-C_RA_AP_Inquiry.pdf" target="_blank">AP Inquiry</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inq-inquir/SOP-5-I-AR00INQ-C_RA_AR_Inquiry.pdf" target="_blank">AR Inquiry</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inq-inquir/SOP-5-I-FA00INQ-C_RA_FA_OnLine_Inqui.pdf" target="_blank">FA Online Inquiries</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inq-inquir/SOP-5-I-GL00INQ-C_RA_GL-Account-Inqu.pdf" target="_blank">GL Account Inquiry</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inq-inquir/SOP-5-I-MFG000INQ-C-RA1-MFG-Inquiry.pdf" target="_blank">MFG Inquiry</a>`,

"19": `You selected Module 19: INV - Inventory<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0003-C_RA_Inventory_Trans.pdf" target="_blank">Inventory Transactions</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0003-PRJ-C_RA_Inventory.pdf" target="_blank">Inventory</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0005-C_RA_INV_Delete_Grou.pdf" target="_blank">INV Delete Groups</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0006-C_RA_ABC_Analysis.pdf" target="_blank">Inventory ABC Analysis</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0007-C_RA_INV_Cycle_Count.pdf" target="_blank">Inventory Cycle Count Creation</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0008-C_RA_Customer-Cross-.pdf" target="_blank">Customer Item and Customer Cross Reference</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0009-C_RA_INV_Physical_In.pdf" target="_blank">INV Physical Inventory</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0012-C_A_Manufacturer_s_P.pdf" target="_blank">Manufacturer's Part Number</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0013-C_RA_Replenishment_C.pdf" target="_blank">Replenishment Counts</a><br>
        10. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0014-C_MinMaxPlanning.pdf" target="_blank">Min Max Planning</a><br>
        11. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0016-C_RA_Inventory_Cycle.pdf" target="_blank">Inventory Cycle Counting Entry</a><br>
        12. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0017-C_RA_PlannersCreate.pdf" target="_blank">PlannersCreate</a><br>
        13. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0018-C_RA_Locator_Creatio.pdf" target="_blank">Locator Creation</a><br>
        14. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0019-C_RA_Safety_Stock.pdf" target="_blank">Safety Stock</a><br>
        15. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0026-C_RA_Pending_Transac.pdf" target="_blank">Pending Transaction Errors</a><br>
        16. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0027-C_RA_Transactions_Op.pdf" target="_blank">Transactions Open Interface Errors</a><br>
        17. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/inv-invent/SOP-5-I-INV0001-C_RA_Inventory_Item_.pdf" target="_blank">Inventory Item Add & Modify</a>`,

"20": `You selected Module 20: MGR - Management<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/mgr-manage/SOP-5-I-MGR0001-C_RA_Management_Prog.pdf" target="_blank">Management Program Manager</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/mgr-manage/SOP-5-I-MGR0002-C_RA_Master_Scheduli.pdf" target="_blank">Master Scheduling</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/mgr-manage/SOP-5-I-MGR0003-C_RA_Materials_Mgr.pdf" target="_blank">Materials Manager</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/mgr-manage/SOP-5-I-MGR0004-C_RA_Purchasing_Mgr.pdf" target="_blank">Purchasing Manager</a>`,

"21": `You selected Module 21: MSCA - MSCA<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/msca/SOP-5-I-MSCA0001-C_RA_MSCA-Receiving.pdf" target="_blank">MSCA Receiving</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/msca/SOP-5-I-MSCA0002-C_RA_MSCA-Inventory.pdf" target="_blank">MSCA Inventory Transactions</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/msca/SOP-5-I-MSCA0003-C_RA2_MSCA_WIP_Tran.pdf" target="_blank">MSCA WIP Transactions</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/msca/SOP-5-I-MSCA0004-C_RA1_MSCA_OM_Shipp.pdf" target="_blank">MSCA OM Shipping</a>`,

"22": `You selected Module 22: NAV - Navigation<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/nav-naviga/SOP-5-I-NAV0001-C_RA_Basic_Navigatio.pdf" target="_blank">Basic Navigation</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/nav-naviga/SOP-5-I-NAV0002-C_RA_OM_Navigation.pdf" target="_blank">Querying Orders & Overview</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/nav-naviga/SOP-5-I-NAV0003-C_RA_Reports_Queries.pdf" target="_blank">Reporting, Queries & Exports</a>`,

"23": `You selected Module 23: OM - Order Management<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-ACR0001-C_RA_ACR-Customer-Co.pdf" target="_blank">Customer Contract Summary ACR Upload Process</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-BSA0001-C--Blanket-Sales-Agr.pdf" target="_blank">Blanket Sales Agreements</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0001-C_RA1_OM_Order_Entry.pdf" target="_blank">OM Sales Order Entry</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0002-C_Order_Entry_Price_L.pdf" target="_blank">Order Entry Price List</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0003-C_RA_OM_Shipping.pdf" target="_blank">OM Shipping Transactions</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0003-CON-C_RA3_Project_Con.pdf" target="_blank">Project Contracts Shipping</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0008-C_Customer_EDI_Proces.pdf" target="_blank">Customer EDI Process</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0009-C_RA1_OM_RMAs.pdf" target="_blank">OM - RMA Entry</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0010-C_RA_Order_Maintenanc.pdf" target="_blank">Order Maintenance</a><br>
        10. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0010-C_RA_Order_Maintenanc.pdf" target="_blank">Price List Load and Update Program</a><br>
        11. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0014-C_RA_OM-Sales-Order-A.pdf" target="_blank">OM Sales Order Review Workbench</a><br>
        12. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0016-C_OM-Containerized-Sh.pdf" target="_blank">OM Containerized Shipping</a><br>
        13. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0019-C_Sanmina-SCI-Contain.pdf" target="_blank">Sanmina-SCI Container Shipping</a><br>
        14. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0020-C_RA_OM_Shipping_-_Multi-Level_Containerization.pdf" target="_blank">Roboship 2.0 Shipping Multilevel Containerization</a><br>
        15. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0021-C_RA_HP_Ocean_Shipment_Automation_Process.pdf" target="_blank">HP Ocean Shipment Automation Process</a><br>
        16. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0022-C_RA_Direct_Order_Fulfillment.pdf" target="_blank">Direct Order Fulfillment</a><br>
        17. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0023-C_RA_Configurable_Orders_Shipping_Process.pdf" target="_blank">Configurable Orders Shipping Process</a><br>
        18. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0024-C_RA_MSCA_-_Direct_Shipping.pdf" target="_blank">MSCA - Direct Shipping</a><br>
        19. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/om-order-m/SOP-5-I-OM0025-C__RA_Roboship_RMA_Process.pdf" target="_blank">Roboship RMA Process</a><br>`,

"24": `You selected Module 24: OTL - Oracle Time and Labor<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/otl-oracle/SOP-5-I-OTL0001-C_RA_Timekeeper-Time.pdf" target="_blank">Timecard Entry</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/otl-oracle/SOP-5-I-OTL0002-C-RA_Timekeeper_Time.pdf" target="_blank">DAS Oracle Time & Labor-Payroll Processing</a><br>`,

"25": `You selected Module 25: PCST - Project Costing<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/pcst-proje/SOP-5-I-PCST0001-C_RA_Oracle-Project.pdf" target="_blank">Oracle Project Costing Labor Transfers, Splits and Adjustments</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/pcst-proje/SOP-5-I-PCST0001-C_RA_Oracle-Project.pdf" target="_blank">Oracle Project Costing Rate Adjustment Process</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/pcst-proje/SOP-5-I-PCST0003-C_RA_Oracle_Project.pdf" target="_blank">Oracle Project Costing Expenditure Entry</a><br>`,

"26": `You selected Module 26: PLN - Planning Management<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/pln-planni/SOP-5-I-PLN0003-C_RA_Kanban-Planning.pdf" target="_blank">Kanban Planning Replenishment</a><br>`,

"27": `You selected Module 27: PO - Purchasing<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0001-C_RA_Standard_PO_Crea.pdf" target="_blank">Standard PO Create Production</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0002-C_RA_PO_Entry_Blanket.pdf" target="_blank">PO Entry Blanket Create & Release</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0003-C_RA_PO_Entry_MRO_Cap.pdf" target="_blank">PO Entry MRO CapEX</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0004-C_RA_PO_Receiving_Rel.pdf" target="_blank">PO Receiving Related Transactions</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0005-C_RA1_Outside_Process.pdf" target="_blank">Outside Processing</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0006-C_RA_PO_ASL.pdf" target="_blank">PO ASL</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0007-C_RA_PO_Sourcing_Rule.pdf" target="_blank">Purchase Order Sourcing Rules</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0009-C_RA_PO_Requisition_S.pdf" target="_blank">PO Requisition Summary</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0010-C_RA_Copy_Change_Canc.pdf" target="_blank">Standard Purchase Order Change Copy Cancel</a><br>
        10. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0011-C_RA_PO_Auto_Create.pdf" target="_blank">PO Auto Create</a><br>
        11. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0012-C_RA_PO_Receiving_w_Q.pdf" target="_blank">PO Receiving with Quality Inspection</a><br>
        12. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0013-C_RA_Agility_Items_-_Forecast_Reschedule_Process.pdf" target="_blank">Agility Items - Forecast Reschedule Process</a><br>
        13. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0014-C_RA_Supplier_EDI_-_Agility_Items_Form.pdf" target="_blank">Supplier EDI - Agility Items Form</a><br>
        14. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0015-C_RA_Buyer_Workload_Mgmt.pdf" target="_blank">Buyer Workload Mgmt</a><br>
        15. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0016-C_RA_Supplier_EDI_Pro.pdf" target="_blank">Supplier EDI Process</a><br>
        16. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0017-C-Manual-PO-in-Apollo.pdf" target="_blank">Manual PO in Apollo</a><br>
        17. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0031-PRJ_RA_Oracle_Purchas.pdf" target="_blank">Oracle Purchasing Advanced Pricing</a><br>
        18. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0032-C_RA_Adding_a_Broker_in_Approved_Broker_Supplier_List.pdf" target="_blank">Adding a Broker in Approved Broker Supplier List</a><br>
        19. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0033-C_RA_Critical_Component_Management_-_Phase_1_Automation.pdf" target="_blank">Critical Component Management - Phase 1 Automation</a><br>
        20. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/po-purchas/SOP-5-I-PO0034-C_Last_Time_Buy_Work_Instruction.pdf" target="_blank">Last Time Buy Work Instruction</a><br>`,

"28": `You selected Module 28: PRJ - Project<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/prj-projec/SOP-5-I-PRJ0001-C_RA_Oracle_Projects.pdf" target="_blank">Project Entry</a><br>`,

"29": `You selected Module 29: QA - Quality<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/qa-quality/SOP-5-I-QA0001-C_RA_Set_Up_for_Quali.pdf" target="_blank">Set Up for Quality Plans at Receiving Inspection</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/qa-quality/SOP-5-I-QA0002-C_RA_Advanced_Quality.pdf" target="_blank">Advanced Quality Set-Up</a><br>`,

"30": `You selected Module 30: RDL - Receiving Discrepancy Log<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/rdl-receiv/Disposition-Code-Data-file-Template-.ods" target="_blank">Disposition Code Data file Template (RDL Disposition)</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/rdl-receiv/RDL-Holiday-Load-Data-file-Template-.ods" target="_blank">RDL Holiday Load Data file Template (RDL Holidays)</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/rdl-receiv/Reason-Code-Data-file-Template--RDL-.ods" target="_blank">RDL MASS UPLOAD Template Downtime Period</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/rdl-receiv/Reason-Code-Data-file-Template--RDL-.ods" target="_blank">Reason Code Data file Template (RDL REASON CODE)</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/rdl-receiv/SOP-5-I-RDL0001-C_RA_Receiving-Discr.pdf" target="_blank">Receiving Discrepancy Log</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/rdl-receiv/SOP-5-I-RDL0002-C_RA_Receiving-Discr.pdf" target="_blank">Receiving Discrepancy Log Ma</a><br>`,

"31": `You selected Module 31: SET - SetUp<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-1-SET0002-C_RA1_Resources_Over.pdf" target="_blank">Resources Overhead and Department SetUp</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0001-C_RevA-1_11_5_10_SAN.xls" target="_blank">SANM Attribute Template</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0001-C_RB_INV_Item_Attrib.pdf" target="_blank">Inventory Item Attributes</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0003-C_RA1_Applications_E.pdf" target="_blank">Applications Engineering SetUp</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0005-C_RA_OSP_for_Value_A.pdf" target="_blank">SetUp for Outside Processing</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0006-C_A_Oracle-Consigned.pdf" target="_blank">Oracle Consigned Material Sanmina-SCI VMI Form</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0007-C_RA_Subinventory_Cr.pdf" target="_blank">Subinventory Create</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0014-C_RA_WIP_Conversion_.pdf" target="_blank">WIP Conversion Legacy with WIP Value to Oracle</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0015-C_RA_OM_Shipping_Usi.pdf" target="_blank">OM Shipping Using Reservations</a><br>
        10. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0017-C_RA_OM_Shipping_Gra.pdf" target="_blank">OM Shipping - Grants Role Definitions</a><br>
        11. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0018-C_RA_Supplier_Manage.pdf" target="_blank">Supplier Managed Inventory</a><br>
        12. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0019-C_RA_SPICE_Setup.pdf" target="_blank">SPICE Setup</a><br>
        13. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0020-C_RA_Inventory-Agili.pdf" target="_blank">Inventory Agility Programs PCB to EMS (ICE)</a><br>
        14. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0022-C_RA_Agility_Item_Setup.pdf" target="_blank">Agility Item Setup</a><br>
        15. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/set-setup/SOP-5-I-SET0023-C_RA_Agility_Items_Markup_Process.pdf" target="_blank">Agility Items Markup Process</a><br>`,

"32": `You selected Module 32: SPICE - Special Intercompany Extension<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/spice-spec/SOP-5-I-SPICE0001-C_SPICE-Shipping-U.pdf" target="_blank">SPICE Shipping Using Move Orders</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/spice-spec/SOP-5-I-SPICE0002-C_OM-SPICE-RMA-Ent.pdf" target="_blank">OM – SPICE RMA Entry</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/spice-spec/SOP-5-I-SPICE0003-C_RA_SPICE_Shippin.pdf" target="_blank">SPICE Shipping Using Automated Move Orders</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/spice-spec/SOP-5-I-SPICE0004-C_RA_BSM-with-Auto.pdf" target="_blank">BSM Auto Move Order & Auto Review Workbench</a><br>`,

"33": `You selected Module 33: TER - Transaction Error Corrections<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ter-transa/SOP-5-I-TER0001-C_RA_Pending_Move_Tr.pdf" target="_blank">Pending Move Transaction Errors</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ter-transa/SOP-5-I-TER0002-C_RA_Pending_Resourc.pdf" target="_blank">Pending Resource Transaction Errors</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ter-transa/SOP-5-I-TER0003-C_Pending_Transactio.pdf" target="_blank">Pending Transaction Errors</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/ter-transa/SOP-5-I-TER0004-C_Transactions_Open_.pdf" target="_blank">Transactions Open Interface Errors</a><br>`,

"34": `You selected Module 34: WIP - Work In Progress<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wip-work-i/SOP-5-I-WIP0001-C_RA_Discrete_Jobs.pdf" target="_blank">Discrete Jobs</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wip-work-i/SOP-5-I-WIP0002-C_RA_WIP_Transaction.pdf" target="_blank">WIP Transactions</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wip-work-i/SOP-5-I-WIP0003-C_RA_Discrete_Jobs_N.pdf" target="_blank">Discrete Jobs – Non-Standard</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wip-work-i/SOP-5-I-WIP0005-C_RA_RMA_Discrete_Jo.pdf" target="_blank">RMA Discrete Jobs - Non-Standard</a><br>`,

"35": `You selected Module 35: WMS - Warehouse Management System<br>Available SOPs:<br>
        1. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0001-C-Overview-and-Navig.pdf" target="_blank">WMS Overview and Navigation</a><br>
        2. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0002-C_WMS-Receiving-Tran.pdf" target="_blank">WMS Receiving Transactions</a><br>
        3. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0003-C-WMS-Stockroom_Ware.pdf" target="_blank">WMS Stockroom/Warehousing Transactions</a><br>
        4. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0004-C-WMS-Kitting.pdf" target="_blank">WMS Kitting</a><br>
        5. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0005-C_WIP-Material-Trans.pdf" target="_blank">WIP Material Transaction</a><br>
        6. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0006-C_WMS-Warehouse-Cont.pdf" target="_blank">WMS Warehouse Control Board</a><br>
        7. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0007_Cycle_Counting.pdf" target="_blank">WMS Cycle Counting</a><br>
        8. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0008-C_WMS-Kanban-Repleni.pdf" target="_blank">WMS Kanban Replenishment</a><br>
        9. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0009-C_WMS-Min-Max-Replen.pdf" target="_blank">WMS Min-Max Replenishment</a><br>
        10. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0017_WMS_Effimat_RT_Putaway.mp4" target="_blank">WMS Effimat RT Putaway</a><br>
        11. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0018-C_Data_Field_Identifier_-_DFI.mp4" target="_blank">Data Field Identifier-DFI</a><br>
        12. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0010-C_WMS-Cost-Group.pdf" target="_blank">WMS Cost Group</a><br>
        13. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0011-C_WMS-Shipping.pdf" target="_blank">WMS Shipping</a><br>
        14. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0012-C-R--WMS-Physical-In.pdf" target="_blank">WMS Physical Inventory</a><br>
        15. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0013-C-WMS-for-Managers-S.pdf" target="_blank">WMS for Managers/Supervisors</a><br>
        16. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0014-C_RA_WMS-Bulk-Pickin.pdf" target="_blank">WMS Bulk Picking</a><br>
        17. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0015-C-WMS-Multi-Line-Doo.pdf" target="_blank">WMS Multi Line Door Service</a><br>
        18. <a href="https://sanminanet.sanmina.com/departments/training/global-it-/oracle-erp/oracle-115/wms/SOP-5-I-WMS0015-C-WMS-Multi-Line-Doo.pdf" target="_blank">WMS Effimat Return Putaway</a><br>`,

"help": `Type the number corresponding to the module you want to access:<br>
           1. ADRP - Advanced DRP<br>
           2. AP - Accounts Payable<br>
           3. AR - Accounts Receivable<br>
           4. ATO - Assemble to Order<br>
           5. BIL - Project Billing<br>
           6. BOM - Bill of Material<br>
           7. BSM - Buy-Sell Model<br>
           8. CON - Project Contracts<br>
           9. CST - Cost<br>
           10. DIS - Discoverer<br>
           11. DRP - Distribution Requirements Planning<br>
           12. EDW - Enterprise Data Warehouse<br>
           13. ENG - Engineering<br>
           14. FA - Fixed Assets<br>
           15. FCS - Forecast<br>
           16. GL - General Ledger<br>
           17. ICE - InterCompany EDI<br>
           18. INQ - Inquiry<br>
           19. INV - Inventory<br>
           20. MGR - Management<br>
           21. MSCA - MSCA<br>
           22. NAV - Navigation<br>
           23. OM - Order Management<br>
           24. OTL - Oracle Time and Labor<br>
           25. PCST - Project Costing<br>
           26. PLN - Planning Management<br>
           27. PO - Purchasing<br>
           28. PRJ - Project<br>
           29. QA - Quality<br>
           30. RDL - Receiving Discrepancy Log<br>
           31. SET - SetUp<br>
           32. SPICE - Special Intercompany Extension<br>
           33. TER - Transaction Error Corrections<br>
           34. WIP - Work In Progress<br>
           35. WMS - Warehouse Management System<br>`,

  "hi": `Hello! I'm here to help you with SOP documents. Type 'help' to see available modules.`
};

// Load chat history from local storage on page load
function loadChatHistory() {
  const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
  chatHistory.forEach(chat => appendMessage(chat.sender, chat.message));
}
loadChatHistory();

// Function to append messages to the chat window
function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerHTML = message; // Allow HTML content
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
}

// Function to get the bot's response
function getBotResponse(message) {
  message = message.trim().toLowerCase();
  return predefinedResponses[message] || "Sorry, I didn't understand that. Type 'help' for assistance.";
}

// Function to handle sending messages
function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage) {
    appendMessage('user', userMessage);
    userInput.value = '';

    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ sender: 'user', message: userMessage });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

    // Handle bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      appendMessage('bot', botResponse);

      chatHistory.push({ sender: 'bot', message: botResponse });
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }, 500); // Simulate typing delay
  }
}

// Clear chat history when the clear button is clicked
document.getElementById('clearChatBtn').addEventListener('click', function() {
  localStorage.removeItem('chatHistory'); // Clear history from local storage
  chatBody.innerHTML = ''; // Clear the chat window
});

// Send message when clicking the Send button
sendBtn.addEventListener('click', sendMessage);

// Send message when pressing Enter key
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Optional: Clear chat history on tab close (if needed)
// window.addEventListener('beforeunload', function() {
//   localStorage.removeItem('chatHistory');
// });