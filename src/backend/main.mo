import List "mo:core/List";
import Types "types/contact-and-content";
import ContactContentMixin "mixins/contact-and-content-api";

actor {
  let inquiries = List.empty<Types.ContactInquiry>();
  let testimonials = List.empty<Types.Testimonial>();
  var _nextInquiryId : Nat = 0;
  var _nextTestimonialId : Nat = 0;
  var _seeded : Bool = false;

  let nextInquiryId = { var value = _nextInquiryId };
  let nextTestimonialId = { var value = _nextTestimonialId };
  let seeded = { var value = _seeded };

  include ContactContentMixin(inquiries, testimonials, nextInquiryId, nextTestimonialId, seeded);
};
