import { useEffect, useRef } from "react";

/**
 * Seeds testimonials on app load.
 * TODO: Call actor.seedTestimonials() once bindgen is run with backend methods.
 */
export function useSeedTestimonials() {
  const seeded = useRef(false);

  useEffect(() => {
    if (seeded.current) return;
    seeded.current = true;

    // Actor not yet available in generated bindings.
    // Will call actor.seedTestimonials() when backend is ready.
    // No-op in the meantime.
  }, []);
}
