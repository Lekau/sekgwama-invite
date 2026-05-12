// rsvp.jsx — multi-step RSVP form
//
// Steps:
//   0 — Full name
//   1 — Will you attend? (Yes / No)
//   2 — Number of guests in your party (only if attending)
//   3 — A note to the couple (optional)
//   4 — Confirmation
//
// The submitted RSVP is persisted to localStorage so a guest who returns
// to the page sees their confirmation rather than re-entering everything.

const RSVP_STORE_KEY = "rsvp.v1";

function loadRsvp() {
  try {
    const raw = localStorage.getItem(RSVP_STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}
function saveRsvp(data) {
  try { localStorage.setItem(RSVP_STORE_KEY, JSON.stringify(data)); } catch (e) {}
}
function clearRsvp() {
  try { localStorage.removeItem(RSVP_STORE_KEY); } catch (e) {}
}

function ProgressDots({ total, current }) {
  return (
    <div className="rsvp__progress" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={
          "step " + (i === current ? "active" : i < current ? "done" : "")
        } />
      ))}
    </div>
  );
}

function StepName({ value, onChange, onNext }) {
  const inputRef = React.useRef(null);
  React.useEffect(() => { inputRef.current?.focus(); }, []);
  const canProceed = value.trim().length >= 2;
  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="step-q">
        <div className="step-q__eyebrow">A favour to ask</div>
        <h3 className="step-q__title">May we know your name?</h3>
        <p className="step-q__sub">As you would like it to appear on your place card.</p>
      </div>
      <div className="field">
        <input
          ref={inputRef}
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && canProceed) onNext(); }}
        />
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

function StepAttending({ value, onChange }) {
  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="step-q">
        <div className="step-q__eyebrow">Kindly respond</div>
        <h3 className="step-q__title">Will you be joining us?</h3>
        <p className="step-q__sub">We so hope you can.</p>
      </div>
      <div className="choice-row">
        <button
          type="button"
          className={"choice" + (value === "yes" ? " selected" : "")}
          onClick={() => onChange("yes")}
        >
          <span className="choice__head">Joyfully accepts</span>
          <span className="choice__sub">Yes, with pleasure</span>
        </button>
        <button
          type="button"
          className={"choice" + (value === "no" ? " selected" : "")}
          onClick={() => onChange("no")}
        >
          <span className="choice__head">Regretfully declines</span>
          <span className="choice__sub">Unable to attend</span>
        </button>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

function PartyCounter({ label, sub, value, onChange, min = 0, max = 8 }) {
  return (
    <div className="party-counter">
      <div className="party-counter__lbl">{label}</div>
      <div className="counter">
        <button type="button" className="counter__btn"
                onClick={() => onChange(Math.max(min, value - 1))}
                disabled={value <= min} aria-label={"Fewer " + label}>−</button>
        <div className="counter__num">{value}</div>
        <button type="button" className="counter__btn"
                onClick={() => onChange(Math.min(max, value + 1))}
                disabled={value >= max} aria-label={"More " + label}>+</button>
      </div>
      <div className="party-counter__sub">{sub}</div>
    </div>
  );
}

function StepGuests({ adults, kids, onAdults, onKids }) {
  const total = adults + kids;
  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="step-q">
        <div className="step-q__eyebrow">Your party</div>
        <h3 className="step-q__title">How many will be joining?</h3>
        <p className="step-q__sub">So we may set the right number of places.</p>
      </div>
      <div className="party-row">
        <PartyCounter label="Adults" sub="Ages 12 &amp; up" value={adults}
                      min={1} onChange={onAdults} />
        <div className="party-row__div" aria-hidden="true"></div>
        <PartyCounter label="Children" sub="Ages 0 – 11" value={kids}
                      min={0} onChange={onKids} />
      </div>
      <div className="party-total">
        Party of <b>{total}</b>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

function StepNote({ value, onChange }) {
  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="step-q">
        <div className="step-q__eyebrow">A few words</div>
        <h3 className="step-q__title">A note to the couple</h3>
        <p className="step-q__sub">Optional — a wish, a memory, a blessing.</p>
      </div>
      <div className="field">
        <textarea
          rows={4}
          maxLength={400}
          placeholder="Your message…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="field__hint">{value.length}/400</div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

function Confirmation({ data, onEdit, formattedDate }) {
  const attending = data.attending === "yes";
  const total = (data.adults || 0) + (data.kids || 0);
  const partySummary = `${data.adults} ${data.adults === 1 ? "adult" : "adults"}` +
                       (data.kids > 0 ? ` & ${data.kids} ${data.kids === 1 ? "child" : "children"}` : "");
  return (
    <div className="confirm fade-in">
      <div className="confirm__crest"><MonogramCrest className="" /></div>
      <h3 className="confirm__title">
        {attending
          ? "Thank you — we cannot wait to see you."
          : "Thank you for letting us know."}
      </h3>
      <p className="confirm__body">
        {attending
          ? <>Your reply has been received{data.name ? <>, <b style={{color:"var(--maroon)"}}>{data.name.split(" ")[0]}</b></> : ""}. A place will be set for {total} on {formattedDate}.</>
          : <>We will miss you dearly, {data.name ? data.name.split(" ")[0] : "friend"}. Thank you for taking a moment to respond — your warmth reaches us all the same.</>}
      </p>
      <div className="confirm__details">
        <div><b>Name:</b> {data.name}</div>
        <div><b>Reply:</b> {attending ? `Joyfully accepts · ${partySummary}` : "Regretfully declines"}</div>
        {data.note ? <div style={{ maxWidth: 360, fontStyle: "italic" }}><b>Note:</b> &ldquo;{data.note}&rdquo;</div> : null}
      </div>
      <div>
        <button type="button" className="btn btn--ghost" onClick={onEdit}>
          Edit my reply
        </button>
      </div>
    </div>
  );
}

function Rsvp({ formattedDate }) {
  const existing = React.useMemo(() => loadRsvp(), []);
  const [submitted, setSubmitted] = React.useState(!!existing);
  const [data, setData] = React.useState(existing || {
    name: "", attending: "", adults: 2, kids: 0, note: ""
  });
  const [step, setStep] = React.useState(0);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const steps = React.useMemo(() => {
    const base = ["name", "attending"];
    if (data.attending === "yes") base.push("guests");
    base.push("note");
    return base;
  }, [data.attending]);

  const currentKey = steps[step];

  const canNext = () => {
    if (currentKey === "name") return data.name.trim().length >= 2;
    if (currentKey === "attending") return data.attending === "yes" || data.attending === "no";
    if (currentKey === "guests") return data.adults >= 1;
    if (currentKey === "note") return true;
    return false;
  };

  const next = () => {
    if (!canNext()) return;
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      saveRsvp(data);
      setSubmitted(true);
    }
  };
  const back = () => { if (step > 0) setStep(step - 1); };

  const editAgain = () => {
    setSubmitted(false);
    setStep(0);
  };

  if (submitted) {
    return (
      <div className="rsvp">
        <Confirmation data={data} onEdit={editAgain} formattedDate={formattedDate} />
      </div>
    );
  }

  const isLast = step === steps.length - 1;

  return (
    <div className="rsvp">
      <ProgressDots total={steps.length} current={step} />
      <div className="rsvp__stage" key={currentKey}>
        {currentKey === "name" && <StepName value={data.name} onChange={(v) => set("name", v)} onNext={next} />}
        {currentKey === "attending" && <StepAttending value={data.attending} onChange={(v) => set("attending", v)} />}
        {currentKey === "guests" && <StepGuests adults={data.adults} kids={data.kids}
                                                onAdults={(v) => set("adults", v)}
                                                onKids={(v) => set("kids", v)} />}
        {currentKey === "note" && <StepNote value={data.note} onChange={(v) => set("note", v)} />}
      </div>
      <div className="rsvp__nav">
        <button
          type="button"
          className="btn btn--ghost"
          onClick={back}
          disabled={step === 0}
          style={{ visibility: step === 0 ? "hidden" : "visible" }}
        >
          ← Back
        </button>
        <button
          type="button"
          className="btn"
          onClick={next}
          disabled={!canNext()}
        >
          {isLast ? "Send reply" : "Continue →"}
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Rsvp, clearRsvp });
