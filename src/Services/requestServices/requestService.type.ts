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

interface IMakeOfferRequestServiceData {
  requestServiceId?: string
  offer: number
}

export interface IMakeOfferRequestServiceService {
  data: IMakeOfferRequestServiceData
}

interface ICreateRequestServiceData {
  serviceId: string
  budget: number
  fromDate: Date
  toDate: Date
  currentImages: string[]
  sampleImages: string[]
}

export interface ICreateRequestServiceService {
  data: ICreateRequestServiceData
}
