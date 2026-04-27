import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    id: bigint;
    name: string;
    submittedAt: bigint;
    email: string;
    message: string;
    category: InquiryCategory;
}
export interface Testimonial {
    id: bigint;
    name: string;
    text: string;
    rating: bigint;
}
export enum InquiryCategory {
    Collaborations = "Collaborations",
    Retail = "Retail",
    BulkOrders = "BulkOrders"
}
export interface backendInterface {
    listInquiries(): Promise<Array<ContactInquiry>>;
    listTestimonials(): Promise<Array<Testimonial>>;
    submitInquiry(name: string, email: string, message: string, category: InquiryCategory): Promise<ContactInquiry>;
}
