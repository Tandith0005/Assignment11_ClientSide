import React from "react";

const Accordion = () => {
  return (
    <div className="space-y-4 my-8 ">
      {/* Operating Hours */}
      <div className="collapse collapse-plus bg-[#d7837f] border border-[#e07196]">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold text-[#cc3366]">
          What are your operating hours?
        </div>
        <div className="collapse-content text-sm ">
          <p>We're open:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Monday-Friday: 8am - 8pm</li>
            <li>Saturday-Sunday: 9am - 9pm</li>
          </ul>
          <p className="mt-2">Holiday hours may vary.</p>
        </div>
      </div>

      {/* Dietary Options */}
      <div className="collapse collapse-plus bg-[#d7837f] border border-[#e07196]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[#cc3366]">
          Do you offer gluten-free or vegan options?
        </div>
        <div className="collapse-content text-sm">
          Yes! We have a dedicated selection of gluten-free and vegan pastries.
          Look for the special icons on our menu or ask our staff for
          recommendations.
        </div>
      </div>

      {/* Reservations */}
      <div className="collapse collapse-plus bg-[#d7837f] border border-[#e07196]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[#cc3366]">
          Do I need a reservation?
        </div>
        <div className="collapse-content text-sm">
          Reservations are recommended for groups of 6 or more, especially on
          weekends. For smaller groups or walk-ins, we operate on a first-come,
          first-served basis.
        </div>
      </div>

      {/* Custom Orders */}
      <div className="collapse collapse-plus bg-[#d7837f] border border-[#e07196]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[#cc3366]">
          Can I place a custom cake order?
        </div>
        <div className="collapse-content text-sm">
          Absolutely! We require at least 72 hours notice for custom cake
          orders. Visit our "Custom Orders" page or call us directly to discuss
          your special requirements.
        </div>
      </div>

      {/* Delivery */}
      <div className="collapse collapse-plus bg-[#d7837f] border border-[#e07196]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[#cc3366]">
          Do you offer delivery?
        </div>
        <div className="collapse-content text-sm">
          Yes, we deliver within a 10-mile radius through our own delivery
          service. We also partner with third-party delivery apps for wider
          coverage.
        </div>
      </div>

      {/* Allergens */}
      <div className="collapse collapse-plus bg-[#d7837f] border border-[#e07196]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[#cc3366]">
          How do you handle food allergies?
        </div>
        <div className="collapse-content text-sm">
          We take allergies very seriously. While we can't guarantee a 100%
          allergen-free environment, we have strict preparation protocols.
          Please inform our staff about any allergies, and we'll guide you to
          safe options and prepare your food with extra care.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
