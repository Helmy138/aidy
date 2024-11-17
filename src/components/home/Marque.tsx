// components/Marquee.tsx
import React from 'react';

const Marque: React.FC = () => {
    return (
        <div className="overflow-hidden bg-black py-5">
            <div className="flex animate-marquee space-x-8">
                {/* Tambahkan logo sesuai dengan keinginanmu */}
                <img src="/assets/logoipsum-297.svg" alt="Logo 1" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-325.svg" alt="Logo 2" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-330.svg" alt="Logo 3" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-331.svg" alt="Logo 4" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-332.svg" alt="Logo 5" className="h-16 bg-white p-3 rounded-lg" />

                {/* Duplikasi gambar untuk membuat efek berkelanjutan */}
                <img src="/assets/logoipsum-297.svg" alt="Logo 1" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-325.svg" alt="Logo 2" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-330.svg" alt="Logo 3" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-331.svg" alt="Logo 4" className="h-16 bg-white p-3 rounded-lg" />
                <img src="/assets/logoipsum-332.svg" alt="Logo 5" className="h-16 bg-white p-3 rounded-lg" />
            </div>
        </div>
    );
};

export default Marque;

