// app.jsx — main RSVP page
//
// ─────────────────────────────────────────────────────────────────────────────
// ADMIN CONFIG — edit these values to update the page for everyone.
// (Also exposed in the Tweaks panel: toggle Tweaks from the toolbar to edit
//  via UI controls; changes persist to this CONFIG block on save.)
// ─────────────────────────────────────────────────────────────────────────────
const CONFIG = /*EDITMODE-BEGIN*/{
  "husbandFirst": "Lucas",
  "wifeFirst": "Euphodia",
  "surname": "Sekgwama",
  "eventDateISO": "2026-08-01T11:00:00+02:00",
  "venueName": "Mokganya View Guest House",
  "venueLine1": "Stand No. C1771, Mogaladi Park",
  "venueLine2": "Mankweng, Turfloop, 0727",
  "mapsQuery": "Mokganya View Guest House Mankweng Turfloop",
  "rsvpName1": "Mokgadi",
  "rsvpPhone1": "083 400 5914",
  "rsvpName2": "Olerato",
  "rsvpPhone2": "082 418 5682",
  "palette": "maroon",
  "script": "italianno"
}/*EDITMODE-END*/;
// ─────────────────────────────────────────────────────────────────────────────

const MONTHS = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
const DAYS   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function formatLongDate(iso) {
  const d = new Date(iso);
  const day = DAYS[d.getDay()];
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  let h = d.getHours(); const m = d.getMinutes();
  const ampm = h >= 12 ? "p.m." : "a.m.";
  h = h % 12 || 12;
  const time = m === 0 ? `${h} ${ampm}` : `${h}:${String(m).padStart(2,"0")} ${ampm}`;
  return { full: `${day}, ${date} ${month} ${year}`, time, day, date, month, year };
}

function useCountdown(iso) {
  const target = React.useMemo(() => new Date(iso).getTime(), [iso]);
  const compute = () => {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return { days, hours, mins, secs, done: diff <= 0 };
  };
  const [t, setT] = React.useState(compute);
  React.useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function SectionOrnament({ small = false }) {
  return (
    <div className="section-orn" aria-hidden="true">
      <span className="rule"></span>
      <span className={"section-orn__diamond" + (small ? " section-orn__diamond--small" : "")}></span>
      <Fleuron size={28} />
      <span className={"section-orn__diamond" + (small ? " section-orn__diamond--small" : "")}></span>
      <span className="rule"></span>
    </div>
  );
}

function Hero({ tweaks, dateInfo }) {
  const cd = useCountdown(tweaks.eventDateISO);
  return (
    <section className="hero">
      <CornerFloral className="hero__corner hero__corner--tl" />
      <CornerFloral className="hero__corner hero__corner--br" />
      <div className="hero__watermark" aria-hidden="true">Together</div>
      <div className="hero__inner">
        <div className="eyebrow hero__eyebrow">You are warmly invited</div>

        <h1 className="hero__names script">
          {tweaks.husbandFirst}{" "}
          <span className="hero__amp">&amp;</span>{" "}
          {tweaks.wifeFirst}
        </h1>

        <p className="hero__lede">
          Together with their family, we honour a milestone of love, legacy
          &amp; family — and warmly request the pleasure of your company.
        </p>

        <Divider width={220} />

        <div className="hero__occasion">
          <div className="hero__occasion-row">
            <span>52 Years of Marriage</span>
            <span className="dot"></span>
            <span>75th &amp; 80th Birthdays</span>
          </div>
          <div className="hero__date">{dateInfo.full} &nbsp;·&nbsp; {dateInfo.time}</div>
        </div>

        <div className="countdown" aria-label="Countdown to the celebration">
          <div className="countdown__cell">
            <div className="countdown__num">{String(cd.days).padStart(2,"0")}</div>
            <div className="countdown__lbl">Days</div>
          </div>
          <div className="countdown__cell">
            <div className="countdown__num">{String(cd.hours).padStart(2,"0")}</div>
            <div className="countdown__lbl">Hours</div>
          </div>
          <div className="countdown__cell">
            <div className="countdown__num">{String(cd.mins).padStart(2,"0")}</div>
            <div className="countdown__lbl">Minutes</div>
          </div>
          <div className="countdown__cell">
            <div className="countdown__num">{String(cd.secs).padStart(2,"0")}</div>
            <div className="countdown__lbl">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Details({ tweaks, dateInfo }) {
  return (
    <section className="section" data-screen-label="Details">
      <div className="sec-head">
        <div className="eyebrow sec-head__eyebrow">The particulars</div>
        <h2 className="sec-head__title">Of the celebration</h2>
      </div>
      <div className="details">
        <CornerFloral className="card-corner card-corner--tl" />
        <CornerFloral className="card-corner card-corner--br" />
        <div className="details__cell">
          <div className="details__icon"><IconCalendar /></div>
          <div className="details__label">When</div>
          <div className="details__value">
            {dateInfo.day}<br />
            {dateInfo.date} {dateInfo.month} {dateInfo.year}
          </div>
          <div className="details__note">Reception begins at {dateInfo.time}</div>
        </div>
        <div className="details__cell">
          <div className="details__icon"><IconLocation /></div>
          <div className="details__label">Where</div>
          <div className="details__value">
            {tweaks.venueName}<br />
            {tweaks.venueLine1}
          </div>
          <div className="details__note">{tweaks.venueLine2}</div>
        </div>
        <div className="details__cell">
          <div className="details__icon"><IconDress /></div>
          <div className="details__label">Attire</div>
          <div className="details__value">Formal</div>
          <div className="details__note">Champagne · Blush · Maroon<br />Come dressed to impress.</div>
        </div>
        <div className="details__cell">
          <div className="details__icon"><IconBed /></div>
          <div className="details__label">Where to stay</div>
          <div className="details__value">Mankweng &amp; Polokwane</div>
          <div className="details__note">A list of nearby guest houses is available on request — contact the family below.</div>
        </div>
      </div>
    </section>
  );
}

function MapSection({ tweaks }) {
  const q = encodeURIComponent(tweaks.mapsQuery || `${tweaks.venueName} ${tweaks.venueLine1} ${tweaks.venueLine2}`);
  const embed = `https://maps.google.com/maps?q=${q}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const link = `https://www.google.com/maps/search/?api=1&query=${q}`;
  return (
    <section className="section" data-screen-label="Map">
      <div className="sec-head">
        <div className="eyebrow sec-head__eyebrow">Finding your way</div>
        <h2 className="sec-head__title">A map to the venue</h2>
      </div>
      <div className="map-card">
        <CornerFloral className="card-corner card-corner--tr" />
        <div className="map-card__frame">
          <iframe
            title="Venue map"
            src={embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-card__body">
          <div className="map-card__title">{tweaks.venueName}</div>
          <div className="map-card__addr">
            {tweaks.venueLine1}<br />
            {tweaks.venueLine2}
          </div>
          <a className="map-card__link" href={link} target="_blank" rel="noreferrer">
            Open in Maps →
          </a>
        </div>
      </div>
    </section>
  );
}

function RsvpSection({ dateInfo }) {
  return (
    <section className="section section--narrow" data-screen-label="RSVP">
      <div className="sec-head">
        <div className="eyebrow sec-head__eyebrow">Kindly reply</div>
        <h2 className="sec-head__title">Will you join us?</h2>
        <p className="sec-head__sub">A few small questions, with our thanks.</p>
      </div>
      <Rsvp formattedDate={dateInfo.full} />
    </section>
  );
}

function GiftNote() {
  return (
    <section className="section section--narrow" data-screen-label="Gift">
      <div className="gift">
        <div className="gift__orn"><GiftOrnament /></div>
        <p className="gift__text">
          Your presence is, truly, the greatest gift. <br />
          Should you wish to honour the couple a little further, a small token
          toward their continued <em>memories</em> would be received with
          warmth and gratitude.
        </p>
      </div>
    </section>
  );
}

function Footer({ tweaks }) {
  return (
    <footer className="footer" data-screen-label="Footer">
      <Divider width={180} />
      <div className="footer__names script" style={{ marginTop: 28 }}>
        {tweaks.husbandFirst} &amp; {tweaks.wifeFirst}
      </div>
      <div className="smallcaps" style={{ color: "var(--maroon-soft)", marginBottom: 22 }}>
        {tweaks.surname}
      </div>
      <div className="footer__contact">
        For any question, kindly contact:
      </div>
      <div className="footer__contact" style={{ marginTop: 6 }}>
        <b>{tweaks.rsvpName1}</b> &nbsp;{tweaks.rsvpPhone1} &nbsp;·&nbsp;
        <b>{tweaks.rsvpName2}</b> &nbsp;{tweaks.rsvpPhone2}
      </div>
      <div style={{ marginTop: 36, fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)" }}>
        With every joy
      </div>
    </footer>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(CONFIG);
  const dateInfo = React.useMemo(() => formatLongDate(tweaks.eventDateISO), [tweaks.eventDateISO]);

  return (
    <div className="page" data-palette={tweaks.palette} data-script={tweaks.script}>
      <Hero tweaks={tweaks} dateInfo={dateInfo} />
      <SectionOrnament />
      <Details tweaks={tweaks} dateInfo={dateInfo} />
      <SectionOrnament small />
      <MapSection tweaks={tweaks} />
      <SectionOrnament small />
      <RsvpSection dateInfo={dateInfo} />
      <SectionOrnament small />
      <GiftNote />
      <Footer tweaks={tweaks} />

      <TweaksPanel title="Admin · Invitation">
        <TweakSection label="Couple" />
        <TweakText label="Husband"
          value={tweaks.husbandFirst}
          onChange={(v) => setTweak('husbandFirst', v)} />
        <TweakText label="Wife"
          value={tweaks.wifeFirst}
          onChange={(v) => setTweak('wifeFirst', v)} />
        <TweakText label="Surname"
          value={tweaks.surname}
          onChange={(v) => setTweak('surname', v)} />

        <TweakSection label="Date &amp; time" />
        <TweakText label="Event ISO"
          value={tweaks.eventDateISO}
          onChange={(v) => setTweak('eventDateISO', v)} />
        <div style={{ fontSize: 10, color: "rgba(41,38,27,.55)", marginTop: -4 }}>
          {dateInfo.full} · {dateInfo.time}
        </div>

        <TweakSection label="Venue" />
        <TweakText label="Name"
          value={tweaks.venueName}
          onChange={(v) => setTweak('venueName', v)} />
        <TweakText label="Address line 1"
          value={tweaks.venueLine1}
          onChange={(v) => setTweak('venueLine1', v)} />
        <TweakText label="Address line 2"
          value={tweaks.venueLine2}
          onChange={(v) => setTweak('venueLine2', v)} />
        <TweakText label="Maps query"
          value={tweaks.mapsQuery}
          onChange={(v) => setTweak('mapsQuery', v)} />

        <TweakSection label="RSVP contacts" />
        <TweakText label="Contact 1 name"
          value={tweaks.rsvpName1}
          onChange={(v) => setTweak('rsvpName1', v)} />
        <TweakText label="Contact 1 phone"
          value={tweaks.rsvpPhone1}
          onChange={(v) => setTweak('rsvpPhone1', v)} />
        <TweakText label="Contact 2 name"
          value={tweaks.rsvpName2}
          onChange={(v) => setTweak('rsvpName2', v)} />
        <TweakText label="Contact 2 phone"
          value={tweaks.rsvpPhone2}
          onChange={(v) => setTweak('rsvpPhone2', v)} />

        <TweakSection label="Visual variations" />
        <TweakSelect label="Palette"
          value={tweaks.palette}
          options={[
            { value: 'maroon', label: 'Warm Maroon' },
            { value: 'cream',  label: 'Cream' },
            { value: 'blush',  label: 'Blush' },
            { value: 'ivory',  label: 'Ivory' },
          ]}
          onChange={(v) => setTweak('palette', v)} />
        <TweakRadio label="Script"
          value={tweaks.script}
          options={[
            { value: 'italianno', label: 'Flowing' },
            { value: 'pinyon',    label: 'Formal' },
            { value: 'italic',    label: 'Restrained' },
          ]}
          onChange={(v) => setTweak('script', v)} />

        <TweakSection label="Testing" />
        <TweakButton label="Reset RSVP submission"
          onClick={() => { clearRsvp(); window.location.reload(); }} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
