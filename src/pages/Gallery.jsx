import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { Modal } from '../components/ui/Modal';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { galleryAlbums, galleryItems } from '../data/gallery';
import { Image, Maximize2, Play, ChevronLeft, ChevronRight, Video } from 'lucide-react';

const videoGalleryItems = [
  {
    id: "v1",
    title: "Rural Mobile Health Unit in Action: Satara District",
    duration: "4:25 min",
    category: "Camps",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Watch our doctors and counselors navigate monsoon terrain to reach isolated villages."
  },
  {
    id: "v2",
    title: "24/7 Tele-Counseling Helpline Triage Protocol",
    duration: "6:10 min",
    category: "Team",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Behind the scenes with our certified NIMHANS psychologists handling crisis calls."
  },
  {
    id: "v3",
    title: "Youth Mind-Shield: Destigmatizing Exam Anxiety in High Schools",
    duration: "3:45 min",
    category: "Events",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Student leaders sharing peer emotional first-aid techniques."
  }
];

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'
  const [activeAlbum, setActiveAlbum] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const filteredPhotos = activeAlbum === 'all'
    ? galleryItems
    : galleryItems.filter((g) => g.album === activeAlbum);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handleNextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null && filteredPhotos.length > 0) {
      setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null && filteredPhotos.length > 0) {
      setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNextPhoto, handlePrevPhoto]);

  return (
    <main className="bg-warm-base py-12">
      {/* Header */}
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Visual Field Media"
            title="Photo & Video Impact Gallery"
            subtitle="Explore candid visual documentations from rural health camps, helpline desks, and beneficiary transformations."
            align="center"
          />

          {/* Photos vs Videos Main Switcher */}
          <div className="flex justify-center mt-6">
            <Tabs
              tabs={[
                { id: 'photos', label: 'Photo Albums', icon: Image, count: galleryItems.length },
                { id: 'videos', label: 'Video Documentaries', icon: Video, count: videoGalleryItems.length },
              ]}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </Container>
      </section>

      {/* Tab 1: Photo Gallery */}
      {activeTab === 'photos' && (
        <section className="py-16 bg-white">
          <Container>
            {/* Album Filters */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-2 p-1.5 bg-warm-base rounded-2xl border border-warm-border overflow-x-auto">
                {galleryAlbums.map((album) => (
                  <button
                    key={album.id}
                    onClick={() => {
                      setActiveAlbum(album.id);
                      setSelectedPhotoIndex(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeAlbum === album.id
                        ? 'bg-brand-teal text-white shadow-soft'
                        : 'text-warm-muted hover:text-warm-charcoal'
                    }`}
                  >
                    {album.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Photos Evenly-Gapped Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map((item, idx) => (
                <Card
                  key={item.id}
                  variant="default"
                  padding="none"
                  className="cursor-pointer group overflow-hidden hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setSelectedPhotoIndex(idx)}
                >
                  <ImagePlaceholder
                    caption={item.caption}
                    aspectRatio={item.aspectRatio || "aspect-[4/3]"}
                    badge={item.category}
                    iconType="camera"
                  />
                  <div className="p-4 bg-white border-t border-warm-border/50 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-warm-charcoal group-hover:text-brand-teal transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-warm-muted">{item.date}</span>
                    </div>
                    <Maximize2 className="w-4 h-4 text-warm-muted group-hover:text-brand-teal transition-colors flex-shrink-0 ml-2" />
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tab 2: Video Gallery */}
      {activeTab === 'videos' && (
        <section className="py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoGalleryItems.map((video) => (
                <Card key={video.id} variant="default" padding="none" className="flex flex-col justify-between group">
                  <div>
                    {/* Thumbnail Lazy Load Simulation */}
                    <div
                      onClick={() => setActiveVideoModal(video)}
                      className="relative cursor-pointer"
                    >
                      <ImagePlaceholder
                        caption={`Watch Documentary (${video.duration})`}
                        aspectRatio="aspect-video"
                        badge={video.category}
                        iconType="play"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between text-xs font-semibold text-brand-teal mb-1">
                        <span>{video.category}</span>
                        <span>{video.duration}</span>
                      </div>
                      <h3 className="font-bold text-base text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-warm-muted leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setActiveVideoModal(video)}
                      className="w-full py-2.5 rounded-xl bg-brand-tint text-brand-teal font-bold text-xs hover:bg-brand-teal hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Video Documentary</span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Photo Lightbox Modal */}
      {currentPhoto && (
        <Modal
          isOpen={!!currentPhoto}
          onClose={() => setSelectedPhotoIndex(null)}
          title={currentPhoto.title}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-4">
            <ImagePlaceholder
              caption={currentPhoto.caption}
              aspectRatio="aspect-video"
              badge={`${currentPhoto.category} • ${currentPhoto.date}`}
              iconType="camera"
              className="shadow-inner"
            />

            <div className="p-4 bg-warm-base rounded-2xl border border-warm-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block">Caption & Details</span>
                <p className="text-xs text-warm-charcoal mt-0.5">{currentPhoto.caption}</p>
                <span className="text-[10px] text-warm-muted block mt-1">Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}</span>
              </div>

              {/* Prev / Next Navigation */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={handlePrevPhoto}
                  className="p-2 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  aria-label="Previous photo"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="p-2 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors"
                  aria-label="Next photo"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Video Iframe Modal */}
      {activeVideoModal && (
        <Modal
          isOpen={!!activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          title={activeVideoModal.title}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={activeVideoModal.embedUrl}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-warm-base rounded-xl text-xs text-warm-muted flex justify-between items-center">
              <span>{activeVideoModal.description}</span>
              <span className="font-bold text-brand-teal">{activeVideoModal.duration}</span>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Gallery;
