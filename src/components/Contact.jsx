import { useState } from 'react';
import { contactSteps, profile, services } from '../data';
import { Anim } from './Anim';
import Icon from './Icon';
import SectionHead from './SectionHead';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const body = new URLSearchParams(new FormData(e.currentTarget));
    setStatus('sending');
    try {
      const res = await fetch('/', { method: 'POST', body });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead eyebrow="let's make something together" title="Let's talk" note="Tell me about your project. I reply within 24 hours." />

        <div className="contact">
          <Anim as="form" name="contact" method="POST" action="/" className="contact__form" onSubmit={submit}>
            <input type="hidden" name="form-name" value="contact" />
            <label hidden>Leave this field blank<input name="bot-field" autoComplete="off" /></label>
            {status === 'sent' ? (
              <div className="contact__sent" role="status">
                <span className="note tone-mint" style={{ '--tilt': '-2deg' }}>Message sent! ✓</span>
                <p>Thanks — I'll get back to you within 24 hours.</p>
                <button type="button" className="btn btn--outline btn--sm" onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <>
                <div className="field-row">
                  <label>Full name<input name="name" required autoComplete="name" placeholder="Jane Doe" /></label>
                  <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" /></label>
                </div>
                <label>What do you need?
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Choose a service</option>
                    {services.map((s) => <option key={s.title}>{s.title}</option>)}
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>Tell me about your project
                  <textarea name="message" rows={5} required placeholder="What does it do, who is it for, what does success look like?" />
                </label>
                {status === 'error' && (
                  <p className="contact__error" role="alert">
                    Your message could not be sent. Please try again.
                    {profile.email && <> You can also <a href={`mailto:${profile.email}`}>email me directly</a>.</>}
                  </p>
                )}
                <button className="btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'} <Icon name="arrow" />
                </button>
              </>
            )}
          </Anim>

          <Anim as="aside" className="steps" delay={150}>
            <h3>What happens next</h3>
            <ol>
              {contactSteps.map((step, i) => <li key={i}><span>{i + 1}</span>{step}</li>)}
            </ol>
          </Anim>
        </div>
      </div>
    </section>
  );
}
