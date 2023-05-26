interface IModifyRequestServiceData {
  requestServiceId?: string
  budget?: number
  fromDate?: Date
  toDate?: Date
  currentImages?: string[]
  sampleImages?: string[]
}

export interface IModifyRequestServiceService {
  data: IModifyRequestServiceData
}