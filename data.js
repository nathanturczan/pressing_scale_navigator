const data = {
    "scales": {
        "a_acoustic": {
            "root": 9,
            "video_index": 1,
            "adjacent_scales": [
                "d_diatonic",
                "e_diatonic",
                "b_harmonic_major",
                "e_harmonic_minor",
                "octatonic_1",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                7,
                9,
                11
            ],
            "chords": [" A", " B", " Em", " F#m"],
            "scale_class": "acoustic"
        },
        "a_diatonic": {
            "root": 9,
            "video_index": 2,
            "adjacent_scales": [
                "d_diatonic",
                "e_diatonic",
                "d_acoustic",
                "e_acoustic",
                "a_harmonic_major",
                "fs_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                8,
                9,
                11
            ],
            "chords": [" A", " Bm", " C#m", " D", " E", " F#m"],
            "scale_class": "diatonic"
        },
        "a_harmonic_major": {
            "root": 9,
            "video_index": 3,
            "adjacent_scales": [
                "a_diatonic",
                "g_acoustic",
                "fs_harmonic_minor",
                "a_harmonic_minor",
                "octatonic_2",
                "hexatonic_1"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                8,
                9,
                11
            ],
            "chords": [" A", " C#m", " C#", " Dm", " E"],
            "scale_class": "harmonic_major"
        },
        "a_harmonic_minor": {
            "root": 9,
            "video_index": 4,
            "adjacent_scales": [
                "c_diatonic",
                "d_acoustic",
                "c_harmonic_major",
                "a_harmonic_major",
                "octatonic_3",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                8,
                9,
                11
            ],
            "chords": [" Am", " Dm", " E", " Fm", " F"],
            "scale_class": "harmonic_minor"
        },
        "as_acoustic": {
            "root": 10,
            "video_index": 5,
            "adjacent_scales": [
                "ds_diatonic",
                "f_diatonic",
                "c_harmonic_major",
                "f_harmonic_minor",
                "octatonic_2",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                8,
                10
            ],
            "chords": [" B♭", " C", " Fm", " Gm"],
            "scale_class": "acoustic"
        },
        "as_diatonic": {
            "root": 10,
            "video_index": 6,
            "adjacent_scales": [
                "ds_diatonic",
                "f_diatonic",
                "ds_acoustic",
                "f_acoustic",
                "as_harmonic_major",
                "g_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                9,
                10
            ],
            "chords": [" B♭", " Cm", " Dm", " E♭", " F", " Gm"],
            "scale_class": "diatonic"
        },
        "as_harmonic_major": {
            "root": 10,
            "video_index": 7,
            "adjacent_scales": [
                "as_diatonic",
                "gs_acoustic",
                "g_harmonic_minor",
                "as_harmonic_minor",
                "octatonic_3",
                "hexatonic_2"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                6,
                9,
                10
            ],
            "chords": [" B♭", " Dm", " D", " E♭m", " F"],
            "scale_class": "harmonic_major"
        },
        "as_harmonic_minor": {
            "root": 10,
            "video_index": 8,
            "adjacent_scales": [
                "cs_diatonic",
                "ds_acoustic",
                "cs_harmonic_major",
                "as_harmonic_major",
                "octatonic_1",
                "hexatonic_2"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                6,
                9,
                10
            ],
            "chords": [" B♭m", " E♭m", " F", " G♭m", " G♭"],
            "scale_class": "harmonic_minor"
        },
        "b_acoustic": {
            "root": 11,
            "video_index": 9,
            "adjacent_scales": [
                "e_diatonic",
                "fs_diatonic",
                "cs_harmonic_major",
                "fs_harmonic_minor",
                "octatonic_3",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                6,
                8,
                9,
                11
            ],
            "chords": [" B", " C#", " F#m", " G#m"],
            "scale_class": "acoustic"
        },
        "b_diatonic": {
            "root": 11,
            "video_index": 10,
            "adjacent_scales": [
                "e_diatonic",
                "fs_diatonic",
                "e_acoustic",
                "fs_acoustic",
                "b_harmonic_major",
                "gs_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                8,
                10,
                11
            ],
            "chords": [" B", " C#m", " D#m", " E", " F#", " G#m"],
            "scale_class": "diatonic"
        },
        "b_harmonic_major": {
            "root": 11,
            "video_index": 11,
            "adjacent_scales": [
                "b_diatonic",
                "a_acoustic",
                "gs_harmonic_minor",
                "b_harmonic_minor",
                "octatonic_1",
                "hexatonic_3"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                7,
                10,
                11
            ],
            "chords": [" B", " D#m", " D#", " Em", " F#"],
            "scale_class": "harmonic_major"
        },
        "b_harmonic_minor": {
            "root": 11,
            "video_index": 12,
            "adjacent_scales": [
                "d_diatonic",
                "e_acoustic",
                "d_harmonic_major",
                "b_harmonic_major",
                "octatonic_2",
                "hexatonic_3"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                7,
                10,
                11
            ],
            "chords": [" Bm", " Em", " F#", " Gm", " G"],
            "scale_class": "harmonic_minor"
        },
        "c_acoustic": {
            "root": 0,
            "video_index": 13,
            "adjacent_scales": [
                "f_diatonic",
                "g_diatonic",
                "d_harmonic_major",
                "g_harmonic_minor",
                "octatonic_1",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                7,
                9,
                10
            ],
            "chords": [" C", " D", " Gm", " Am"],
            "scale_class": "acoustic"
        },
        "c_diatonic": {
            "root": 0,
            "video_index": 14,
            "adjacent_scales": [
                "f_diatonic",
                "g_diatonic",
                "f_acoustic",
                "g_acoustic",
                "c_harmonic_major",
                "a_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                9,
                11
            ],
            "chords": [" C", " Dm", " Em", " F", " G", " Am"],
            "scale_class": "diatonic"
        },
        "c_harmonic_major": {
            "root": 0,
            "video_index": 15,
            "adjacent_scales": [
                "c_diatonic",
                "as_acoustic",
                "c_harmonic_minor",
                "a_harmonic_minor",
                "octatonic_2",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                8,
                11
            ],
            "chords": [" C", " Em", " E", " Fm", " G"],
            "scale_class": "harmonic_major"
        },
        "c_harmonic_minor": {
            "root": 0,
            "video_index": 16,
            "adjacent_scales": [
                "ds_diatonic",
                "f_acoustic",
                "c_harmonic_major",
                "ds_harmonic_major",
                "octatonic_3",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                8,
                11
            ],
            "chords": [" Cm", " Fm", " G", " A♭m", " A♭"],
            "scale_class": "harmonic_minor"
        },
        "cs_acoustic": {
            "root": 1,
            "video_index": 17,
            "adjacent_scales": [
                "fs_diatonic",
                "gs_diatonic",
                "ds_harmonic_major",
                "gs_harmonic_minor",
                "octatonic_2",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                7,
                8,
                10,
                11
            ],
            "chords": [" D♭", " E♭", " A♭m", " B♭m"],
            "scale_class": "acoustic"
        },
        "cs_diatonic": {
            "root": 1,
            "video_index": 18,
            "adjacent_scales": [
                "fs_diatonic",
                "gs_diatonic",
                "fs_acoustic",
                "gs_acoustic",
                "cs_harmonic_major",
                "as_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                6,
                8,
                10
            ],
            "chords": [" D♭", " E♭m", " Fm", " G♭", " A♭", " B♭m"],
            "scale_class": "diatonic"
        },
        "cs_harmonic_major": {
            "root": 1,
            "video_index": 19,
            "adjacent_scales": [
                "cs_diatonic",
                "b_acoustic",
                "cs_harmonic_minor",
                "as_harmonic_minor",
                "octatonic_3",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                6,
                8,
                9
            ],
            "chords": [" D♭", " Fm", " F", " G♭m", " A♭"],
            "scale_class": "harmonic_major"
        },
        "cs_harmonic_minor": {
            "root": 1,
            "video_index": 20,
            "adjacent_scales": [
                "e_diatonic",
                "fs_acoustic",
                "cs_harmonic_major",
                "e_harmonic_major",
                "octatonic_1",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                6,
                8,
                9
            ],
            "chords": [" D♭m", " G♭m", " A♭", " Am", " A"],
            "scale_class": "harmonic_minor"
        },
        "d_acoustic": {
            "root": 2,
            "video_index": 21,
            "adjacent_scales": [
                "g_diatonic",
                "a_diatonic",
                "e_harmonic_major",
                "a_harmonic_minor",
                "octatonic_3",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                8,
                9,
                11
            ],
            "chords": [" D", " E", " Am", " Bm"],
            "scale_class": "acoustic"
        },
        "d_diatonic": {
            "root": 2,
            "video_index": 22,
            "adjacent_scales": [
                "g_diatonic",
                "a_diatonic",
                "g_acoustic",
                "a_acoustic",
                "d_harmonic_major",
                "b_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                7,
                9,
                11
            ],
            "chords": [" D", " Em", " F#m", " G", " A", " Bm"],
            "scale_class": "diatonic"
        },
        "d_harmonic_major": {
            "root": 2,
            "video_index": 23,
            "adjacent_scales": [
                "d_diatonic",
                "c_acoustic",
                "d_harmonic_minor",
                "b_harmonic_minor",
                "octatonic_1",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                7,
                9,
                10
            ],
            "chords": [" D", " F#m", " F#", " Gm", " A"],
            "scale_class": "harmonic_major"
        },
        "d_harmonic_minor": {
            "root": 2,
            "video_index": 24,
            "adjacent_scales": [
                "f_diatonic",
                "g_acoustic",
                "d_harmonic_major",
                "f_harmonic_major",
                "octatonic_2",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                7,
                9,
                10
            ],
            "chords": [" Dm", " Gm", " A", " B♭m", " B♭"],
            "scale_class": "harmonic_minor"
        },
        "ds_acoustic": {
            "root": 3,
            "video_index": 25,
            "adjacent_scales": [
                "gs_diatonic",
                "as_diatonic",
                "f_harmonic_major",
                "as_harmonic_minor",
                "octatonic_1",
                "whole_tone_2"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                7,
                9,
                10
            ],
            "chords": [" E♭", " F", " B♭m", " Cm"],
            "scale_class": "acoustic"
        },
        "ds_diatonic": {
            "root": 3,
            "video_index": 26,
            "adjacent_scales": [
                "gs_diatonic",
                "as_diatonic",
                "gs_acoustic",
                "as_acoustic",
                "ds_harmonic_major",
                "c_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                8,
                10
            ],
            "chords": [" E♭", " Fm", " Gm", " A♭", " B♭", " Cm"],
            "scale_class": "diatonic"
        },
        "ds_harmonic_major": {
            "root": 3,
            "video_index": 27,
            "adjacent_scales": [
                "ds_diatonic",
                "cs_acoustic",
                "c_harmonic_minor",
                "ds_harmonic_minor",
                "octatonic_2",
                "hexatonic_3"
            ],
            "pitch_classes": [
                2,
                3,
                5,
                7,
                8,
                10,
                11
            ],
            "chords": [" E♭", " Gm", " G", " A♭m", " B♭"],
            "scale_class": "harmonic_major"
        },
        "ds_harmonic_minor": {
            "root": 3,
            "video_index": 28,
            "adjacent_scales": [
                "fs_diatonic",
                "gs_acoustic",
                "ds_harmonic_major",
                "fs_harmonic_major",
                "octatonic_3",
                "hexatonic_3"
            ],
            "pitch_classes": [
                2,
                3,
                5,
                6,
                8,
                10,
                11
            ],
            "chords": [" E♭m", " A♭m", " B♭", " Bm", " B"],
            "scale_class": "harmonic_minor"
        },
        "e_acoustic": {
            "root": 4,
            "video_index": 29,
            "adjacent_scales": [
                "a_diatonic",
                "b_diatonic",
                "fs_harmonic_major",
                "b_harmonic_minor",
                "octatonic_2",
                "whole_tone_1"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                8,
                10,
                11
            ],
            "chords": [" E", " F#", " Bm", " C#m"],
            "scale_class": "acoustic"
        },
        "e_diatonic": {
            "root": 4,
            "video_index": 30,
            "adjacent_scales": [
                "a_diatonic",
                "b_diatonic",
                "a_acoustic",
                "b_acoustic",
                "e_harmonic_major",
                "cs_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                8,
                9,
                11
            ],
            "chords": [" E", " F#m", " G#m", " A", " B", " C#m"],
            "scale_class": "diatonic"
        },
        "e_harmonic_major": {
            "root": 4,
            "video_index": 31,
            "adjacent_scales": [
                "e_diatonic",
                "d_acoustic",
                "cs_harmonic_minor",
                "e_harmonic_minor",
                "octatonic_3",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                3,
                4,
                6,
                8,
                9,
                11
            ],
            "chords": [" E", " G#m", " G", " Am", " B"],
            "scale_class": "harmonic_major"
        },
        "e_harmonic_minor": {
            "root": 4,
            "video_index": 32,
            "adjacent_scales": [
                "g_diatonic",
                "a_acoustic",
                "e_harmonic_major",
                "g_harmonic_major",
                "octatonic_1",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                3,
                4,
                6,
                7,
                9,
                11
            ],
            "chords": [" Em", " Am", " B", " Cm", " C"],
            "scale_class": "harmonic_minor"
        },
        "f_acoustic": {
            "root": 5,
            "video_index": 33,
            "adjacent_scales": [
                "c_diatonic",
                "as_diatonic",
                "g_harmonic_major",
                "c_harmonic_minor",
                "octatonic_3",
                "whole_tone_2"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                9,
                11
            ],
            "chords": [" F", " G", " Cm", " Dm"],
            "scale_class": "acoustic"
        },
        "f_diatonic": {
            "root": 5,
            "video_index": 34,
            "adjacent_scales": [
                "c_diatonic",
                "as_diatonic",
                "c_acoustic",
                "as_acoustic",
                "f_harmonic_major",
                "d_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                9,
                10
            ],
            "chords": [" F", " Gm", " Am", " B♭", " C", " Dm"],
            "scale_class": "diatonic"
        },
        "f_harmonic_major": {
            "root": 5,
            "video_index": 35,
            "adjacent_scales": [
                "f_diatonic",
                "ds_acoustic",
                "d_harmonic_minor",
                "f_harmonic_minor",
                "octatonic_1",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                4,
                5,
                7,
                9,
                10
            ],
            "chords": [" F", " Am", " A", " B♭m", " C"],
            "scale_class": "harmonic_major"
        },
        "f_harmonic_minor": {
            "root": 5,
            "video_index": 36,
            "adjacent_scales": [
                "gs_diatonic",
                "as_acoustic",
                "f_harmonic_major",
                "gs_harmonic_major",
                "octatonic_2",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                4,
                5,
                7,
                8,
                10
            ],
            "chords": [" Fm", " B♭m", " C", " D♭m", " D♭"],
            "scale_class": "harmonic_minor"
        },
        "fs_acoustic": {
            "root": 6,
            "video_index": 37,
            "adjacent_scales": [
                "cs_diatonic",
                "b_diatonic",
                "gs_harmonic_major",
                "cs_harmonic_minor",
                "octatonic_1",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                6,
                8,
                10
            ],
            "chords": [" F#", " G#", " C#m", " D#m"],
            "scale_class": "acoustic"
        },
        "fs_diatonic": {
            "root": 6,
            "video_index": 38,
            "adjacent_scales": [
                "cs_diatonic",
                "b_diatonic",
                "cs_acoustic",
                "b_acoustic",
                "fs_harmonic_major",
                "ds_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                6,
                8,
                10,
                11
            ],
            "chords": [" F#", " G#m", " A#m", " B", " C#", " D#m"],
            "scale_class": "diatonic"
        },
        "fs_harmonic_major": {
            "root": 6,
            "video_index": 39,
            "adjacent_scales": [
                "fs_diatonic",
                "e_acoustic",
                "ds_harmonic_minor",
                "fs_harmonic_minor",
                "octatonic_2",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                5,
                6,
                8,
                10,
                11
            ],
            "chords": [" F#", " B♭m", " B♭", " Bm", " C#"],
            "scale_class": "harmonic_major"
        },
        "fs_harmonic_minor": {
            "root": 6,
            "video_index": 40,
            "adjacent_scales": [
                "a_diatonic",
                "b_acoustic",
                "fs_harmonic_major",
                "a_harmonic_major",
                "octatonic_3",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                5,
                6,
                8,
                9,
                11
            ],
            "chords": [" F#m", " Bm", " C#", " Dm", " D"],
            "scale_class": "harmonic_minor"
        },
        "g_acoustic": {
            "root": 7,
            "video_index": 41,
            "adjacent_scales": [
                "c_diatonic",
                "d_diatonic",
                "a_harmonic_major",
                "d_harmonic_minor",
                "octatonic_2",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                7,
                9,
                11
            ],
            "chords": [" G", " A", " Dm", " Em"],
            "scale_class": "acoustic"
        },
        "g_diatonic": {
            "root": 7,
            "video_index": 42,
            "adjacent_scales": [
                "c_diatonic",
                "d_diatonic",
                "c_acoustic",
                "d_acoustic",
                "g_harmonic_major",
                "e_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                7,
                9,
                11
            ],
            "chords": [" G", " Am", " Bm", " C", " D", " Em"],
            "scale_class": "diatonic"
        },
        "g_harmonic_major": {
            "root": 7,
            "video_index": 43,
            "adjacent_scales": [
                "g_diatonic",
                "f_acoustic",
                "e_harmonic_minor",
                "g_harmonic_minor",
                "octatonic_3",
                "hexatonic_3"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                6,
                7,
                9,
                11
            ],
            "chords": [" G", " Bm", " B", " Cm", " D"],
            "scale_class": "harmonic_major"
        },
        "g_harmonic_minor": {
            "root": 7,
            "video_index": 44,
            "adjacent_scales": [
                "as_diatonic",
                "c_acoustic",
                "g_harmonic_major",
                "as_harmonic_major",
                "octatonic_1",
                "hexatonic_3"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                6,
                7,
                9,
                10
            ],
            "chords": [" Gm", " Cm", " D", " E♭m", " E♭"],
            "scale_class": "harmonic_minor"
        },
        "gs_acoustic": {
            "root": 8,
            "video_index": 45,
            "adjacent_scales": [
                "cs_diatonic",
                "ds_diatonic",
                "as_harmonic_major",
                "ds_harmonic_minor",
                "octatonic_3",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                6,
                8,
                10
            ],
            "chords": [" A♭", " B♭", " E♭m", " Fm"],
            "scale_class": "acoustic"
        },
        "gs_diatonic": {
            "root": 8,
            "video_index": 46,
            "adjacent_scales": [
                "cs_diatonic",
                "ds_diatonic",
                "cs_acoustic",
                "ds_acoustic",
                "gs_harmonic_major",
                "f_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                7,
                8,
                10
            ],
            "chords": [" A♭", " B♭m", " Cm", " D♭", " E♭", " Fm"],
            "scale_class": "diatonic"
        },
        "gs_harmonic_major": {
            "root": 8,
            "video_index": 47,
            "adjacent_scales": [
                "gs_diatonic",
                "fs_acoustic",
                "f_harmonic_minor",
                "gs_harmonic_minor",
                "octatonic_1",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                7,
                8,
                10
            ],
            "chords": [" A♭", " Cm", " C", " D♭m", " E♭"],
            "scale_class": "harmonic_major"
        },
        "gs_harmonic_minor": {
            "root": 8,
            "video_index": 48,
            "adjacent_scales": [
                "b_diatonic",
                "cs_acoustic",
                "gs_harmonic_major",
                "b_harmonic_major",
                "octatonic_2",
                "hexatonic_4"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                7,
                8,
                10,
                11
            ],
            "chords": [" A♭m", " D♭m", " E♭", " Em", " E"],
            "scale_class": "harmonic_minor"
        },
        "octatonic_1": {
            "root": 0,
            "video_index": 49,
            "adjacent_scales": [
                "c_acoustic",
                "ds_acoustic",
                "fs_acoustic",
                "a_acoustic",
                "d_harmonic_major",
                "f_harmonic_major",
                "gs_harmonic_major",
                "b_harmonic_major",
                "cs_harmonic_minor",
                "e_harmonic_minor",
                "g_harmonic_minor",
                "as_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                6,
                7,
                9,
                10
            ],
            "chords": [" Cm", " C", " E♭m", " E♭", " F#m", " F#", " Am", "A"],
            "scale_class": "octatonic"
        },
        "octatonic_2": {
            "root": 1,
            "video_index": 50,
            "adjacent_scales": [
                "cs_acoustic",
                "e_acoustic",
                "g_acoustic",
                "as_acoustic",
                "c_harmonic_major",
                "ds_harmonic_major",
                "fs_harmonic_major",
                "a_harmonic_major",
                "d_harmonic_minor",
                "f_harmonic_minor",
                "gs_harmonic_minor",
                "b_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                7,
                8,
                10,
                11
            ],
            "chords": [" C#m", " C#", " Em", " E", " Gm", " G", " B♭m", " B♭"],
            "scale_class": "octatonic"
        },
        "octatonic_3": {
            "root": 2,
            "video_index": 51,
            "adjacent_scales": [
                "d_acoustic",
                "f_acoustic",
                "gs_acoustic",
                "b_acoustic",
                "cs_harmonic_major",
                "e_harmonic_major",
                "g_harmonic_major",
                "as_harmonic_major",
                "c_harmonic_minor",
                "ds_harmonic_minor",
                "fs_harmonic_minor",
                "a_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11
            ],
            "chords": [" Dm", " D", " Fm", " F", " A♭m", " A♭", " Bm", " B"],
            "scale_class": "octatonic"
        },
        "hexatonic_1": {
            "root": 0,
            "video_index": 52,
            "adjacent_scales": [
                "cs_harmonic_major",
                "f_harmonic_major",
                "a_harmonic_major",
                "cs_harmonic_minor",
                "f_harmonic_minor",
                "a_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                4,
                5,
                8,
                9
            ],
            "chords": [" C#m", " C#", " Fm", " F", " Am", " A"],
            "scale_class": "hexatonic"
        },
        "hexatonic_2": {
            "root": 1,
            "video_index": 53,
            "adjacent_scales": [
                "d_harmonic_major",
                "fs_harmonic_major",
                "as_harmonic_major",
                "d_harmonic_minor",
                "fs_harmonic_minor",
                "as_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                5,
                6,
                9,
                10
            ],
            "chords": [" Dm", " D", " F#m", " F#", " B♭m", " B♭"],
            "scale_class": "hexatonic"
        },
        "hexatonic_3": {
            "root": 2,
            "video_index": 54,
            "adjacent_scales": [
                "ds_harmonic_major",
                "g_harmonic_major",
                "b_harmonic_major",
                "ds_harmonic_minor",
                "g_harmonic_minor",
                "b_harmonic_minor"
            ],
            "pitch_classes": [
                2,
                3,
                6,
                7,
                10,
                11
            ],
            "chords": [" E♭m", " E♭", " Gm", " G", " Bm", " B"],
            "scale_class": "hexatonic"
        },
        "hexatonic_4": {
            "root": 3,
            "video_index": 55,
            "adjacent_scales": [
                "c_harmonic_major",
                "e_harmonic_major",
                "gs_harmonic_major",
                "c_harmonic_minor",
                "e_harmonic_minor",
                "gs_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                3,
                4,
                7,
                8,
                11
            ],
            "chords": [" Em", " E", " A♭m", " A♭", " Cm", " C"],
            "scale_class": "hexatonic"
        },
        "whole_tone_1": {
            "root": 0,
            "video_index": 56,
            "adjacent_scales": [
                "c_acoustic",
                "d_acoustic",
                "e_acoustic",
                "fs_acoustic",
                "gs_acoustic",
                "as_acoustic"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                8,
                10
            ],
            "chords": [],
            "scale_class": "whole_tone"
        },
        "whole_tone_2": {
            "root": 1,
            "video_index": 57,
            "adjacent_scales": [
                "cs_acoustic",
                "ds_acoustic",
                "f_acoustic",
                "g_acoustic",
                "a_acoustic",
                "b_acoustic"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                7,
                9,
                11
            ],
            "chords": [],
            "scale_class": "whole_tone"
        }
    }
}
