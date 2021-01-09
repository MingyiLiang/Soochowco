export class AppModel {
    backPath?: string;
    fatalError?: any;
  
    // Records how many modals are open.
    // It's the responsibility of modals to
    // dispatch the changeModalCount action when they open or close.
    modalSemaphore: number;
}

export type Endpoint = {
    url: string;
    token?: string;
}