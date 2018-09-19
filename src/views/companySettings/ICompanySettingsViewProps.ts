import CompanySettingsModel from "../../constants/implementations/CompanySettingsModel"

export default interface ICompanySettingsViewProps {
    // Local
    Id: string,
    model: CompanySettingsModel,
    // Redux
    company: any,
    companyAdd: any,
    companyUpdate: any,
}