import { InquiryCategory, createActor } from "@/backend";
import type { ContactFormState, ContactInquiry } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useCallback, useState } from "react";

function toInquiryCategory(
  inquiryType: ContactInquiry["inquiryType"],
): InquiryCategory {
  switch (inquiryType) {
    case "retail":
      return InquiryCategory.Retail;
    case "bulk":
      return InquiryCategory.BulkOrders;
    case "collaboration":
      return InquiryCategory.Collaborations;
    default:
      return InquiryCategory.Retail;
  }
}

export function useContactForm() {
  const { actor } = useActor(createActor);

  const [state, setState] = useState<ContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const submit = useCallback(
    async (inquiry: ContactInquiry) => {
      setState({ isSubmitting: true, isSuccess: false, error: null });

      try {
        if (!actor) throw new Error("Service unavailable. Please try again.");

        await actor.submitInquiry(
          inquiry.name,
          inquiry.email,
          inquiry.message,
          toInquiryCategory(inquiry.inquiryType),
        );

        setState({ isSubmitting: false, isSuccess: true, error: null });
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Submission failed. Please try again.";
        setState({ isSubmitting: false, isSuccess: false, error: message });
      }
    },
    [actor],
  );

  const reset = useCallback(() => {
    setState({ isSubmitting: false, isSuccess: false, error: null });
  }, []);

  return { ...state, submit, reset };
}
