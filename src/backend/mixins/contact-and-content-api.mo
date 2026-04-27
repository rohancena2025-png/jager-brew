import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/contact-and-content";

mixin (
  inquiries : List.List<Types.ContactInquiry>,
  testimonials : List.List<Types.Testimonial>,
  nextInquiryId : { var value : Nat },
  nextTestimonialId : { var value : Nat },
  seeded : { var value : Bool },
) {
  /// Submit a new contact/distribution inquiry.
  public shared func submitInquiry(
    name : Text,
    email : Text,
    message : Text,
    category : Types.InquiryCategory,
  ) : async Types.ContactInquiry {
    Debug.todo()
  };

  /// Retrieve all submitted contact inquiries (admin read).
  public query func listInquiries() : async [Types.ContactInquiry] {
    Debug.todo()
  };

  /// Retrieve all testimonials.
  public query func listTestimonials() : async [Types.Testimonial] {
    Debug.todo()
  };
};
