import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { orgInfo } from '../../data/orgInfo';
import { InstagramIcon } from '../ui/SocialIcons';

const instaPosts = [
  { id: 1, caption: "Mobile diagnostic clinic #3 arriving in Satara village early this morning. #RuralHealthcare #AuraFoundation", likes: 342, comments: 28, tag: "Field Operations" },
  { id: 2, caption: "24/7 Tele-helpline training session with our newly joined clinical psychologists. #MentalHealthMatters", likes: 489, comments: 41, tag: "Helpline Triage" },
  { id: 3, caption: "Smiling faces at our free eye screening camp in Palghar district. 120 prescription glasses distributed! 👓", likes: 612, comments: 54, tag: "Beneficiary Smiles" },
  { id: 4, caption: "School mental resilience workshop: teaching grounding techniques to high school students in Pune.", likes: 405, comments: 33, tag: "Youth Mind-Shield" },
];

export const InstagramFeedSection = () => {
  return (
    <section className="py-16 bg-warm-base border-t border-warm-border/50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
              <InstagramIcon className="w-4 h-4" />
              <span>@aura_ngo on Instagram</span>
            </div>
            <h2 className="text-2xl font-extrabold text-warm-charcoal mt-1">Ground Updates from the Field</h2>
          </div>
          <a
            href={orgInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-warm-border text-xs font-bold text-warm-charcoal hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 transition-colors self-start sm:self-auto"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-5 border border-warm-border shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-semibold">
                    {post.tag}
                  </span>
                  <InstagramIcon className="w-4 h-4 text-warm-muted group-hover:text-rose-500 transition-colors" />
                </div>
                <p className="text-xs text-warm-muted leading-relaxed line-clamp-3 mb-4">
                  {post.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-warm-border/50 flex items-center gap-4 text-xs font-semibold text-warm-muted">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 text-warm-muted" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
