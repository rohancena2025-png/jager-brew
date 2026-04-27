module {
  public type InquiryCategory = {
    #Retail;
    #BulkOrders;
    #Collaborations;
  };

  public type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    category : InquiryCategory;
    submittedAt : Int;
  };

  public type Testimonial = {
    id : Nat;
    name : Text;
    text : Text;
    rating : Nat; // 1-5 stars
  };
};
