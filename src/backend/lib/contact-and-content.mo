import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/contact-and-content";

module {
  public func submitInquiry(
    inquiries : List.List<Types.ContactInquiry>,
    nextId : Nat,
    name : Text,
    email : Text,
    message : Text,
    category : Types.InquiryCategory,
    now : Int,
  ) : Types.ContactInquiry {
    Debug.todo()
  };

  public func listInquiries(
    inquiries : List.List<Types.ContactInquiry>
  ) : [Types.ContactInquiry] {
    Debug.todo()
  };

  public func listTestimonials(
    testimonials : List.List<Types.Testimonial>
  ) : [Types.Testimonial] {
    Debug.todo()
  };

  public func seedTestimonials(
    testimonials : List.List<Types.Testimonial>,
    nextId : Nat,
  ) : Nat {
    Debug.todo()
  };
};
