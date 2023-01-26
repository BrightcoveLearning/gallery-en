var BCLSDDrenditions = (function(window, document) {
      var BCLSrenditionData = {
        BCLSrenditionsVideo: [{"id":"default/video900","version":5,"name":"Default Video900","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:55.150904095Z","updated_at":"2018-04-10T17:54:08.469543676Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1350,"decoder_buffer_size":1800,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":360,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":900,"video_codec":"h264"}},{"id":"default/video700","version":5,"name":"Default Video700","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:54.742007828Z","updated_at":"2018-04-10T17:54:07.905886133Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1050,"decoder_buffer_size":1400,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_profile":"baseline","height":360,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":700,"video_codec":"h264"}},{"id":"default/video6000","version":2,"name":"Default Video6000","kind":"video","account_id":"default","created_at":"2016-10-12T00:28:00.605692603Z","updated_at":"2018-06-12T16:54:10.44674261Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":9000,"decoder_buffer_size":12000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"high","height":2160,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":6000,"video_codec":"h264"}},{"id":"default/video450","version":5,"name":"Default Video450","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:54.333556376Z","updated_at":"2018-04-10T17:54:07.315641088Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":675,"decoder_buffer_size":900,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_profile":"baseline","height":270,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":450,"video_codec":"h264"}},{"id":"default/video4000","version":5,"name":"Default Video4000","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:53.907017826Z","updated_at":"2018-04-10T17:54:06.725040326Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":6000,"decoder_buffer_size":8000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"high","height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":4000,"video_codec":"h264","width":2048}},{"id":"default/video3800","version":4,"name":"Default Video3800","kind":"video","account_id":"default","created_at":"2016-10-13T02:52:42.941473455Z","updated_at":"2018-04-10T17:54:06.128550923Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":5700,"decoder_buffer_size":7600,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":3800,"video_codec":"h264"}},{"id":"default/video3500","version":5,"name":"Default Video3500","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:53.493670562Z","updated_at":"2018-04-10T17:54:05.394946466Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":5250,"decoder_buffer_size":7000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"high","height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":3500,"video_codec":"h264","width":2048}},{"id":"default/video2500","version":5,"name":"Default Video2500","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:53.062872982Z","updated_at":"2018-04-10T17:54:04.900867342Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":3750,"decoder_buffer_size":5000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":720,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":2500,"video_codec":"h264"}},{"id":"default/video2000","version":4,"name":"Default Video2000","kind":"video","account_id":"default","created_at":"2016-09-01T16:23:46.83319503Z","updated_at":"2018-04-10T17:54:04.369727738Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":3000,"decoder_buffer_size":4000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":720,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":2000,"video_codec":"h264"}},{"id":"default/video1700","version":5,"name":"Default Video1700","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:52.657713254Z","updated_at":"2018-04-10T17:54:03.875572539Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":2550,"decoder_buffer_size":3400,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":540,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":1700,"video_codec":"h264"}},{"id":"default/video1200","version":5,"name":"Default Video1200","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:52.256973266Z","updated_at":"2018-04-10T17:54:03.36884425Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1800,"decoder_buffer_size":2400,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":540,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":1200,"video_codec":"h264"}}],
        BCLSrenditionsVideoProgressive: [{"id":"default/progressive900","version":0,"name":"Default Progressive900","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:32:53.284764088Z","updated_at":"2018-06-11T22:32:53.284764088Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":1350,"decoder_buffer_size":1800,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":360,"speed":3,"upscale":false,"video_bitrate":900,"video_codec":"h264"}},{"id":"default/progressive700","version":0,"name":"Default Progressive700","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:32:33.937106287Z","updated_at":"2018-06-11T22:32:33.937106287Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":1050,"decoder_buffer_size":1400,"force_aac_profile":"aac-lc","h264_profile":"baseline","height":360,"speed":3,"upscale":false,"video_bitrate":700,"video_codec":"h264"}},{"id":"default/progressive450","version":0,"name":"Default Progressive450","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:01:54.680631382Z","updated_at":"2018-02-27T22:01:54.680631382Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":64,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":675,"decoder_buffer_size":900,"force_aac_profile":"aac-lc","h264_profile":"baseline","height":270,"speed":3,"upscale":false,"video_bitrate":450,"video_codec":"h264"}},{"id":"default/progressive4000","version":0,"name":"Default Progressive4000","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:37:50.217242316Z","updated_at":"2018-06-11T22:37:50.217242316Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":6000,"decoder_buffer_size":8000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"high","height":1080,"speed":3,"upscale":false,"video_bitrate":4000,"video_codec":"h264","width":2048}},{"id":"default/progressive3500","version":0,"name":"Default Progressive3500","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:34:01.503067518Z","updated_at":"2018-06-11T22:34:01.503067518Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":5250,"decoder_buffer_size":7000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"high","height":1080,"speed":3,"upscale":false,"video_bitrate":3500,"video_codec":"h264","width":2048}},{"id":"default/progressive2500","version":0,"name":"Default Progressive2500","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:33:45.851290928Z","updated_at":"2018-06-11T22:33:45.851290928Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":3750,"decoder_buffer_size":5000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":720,"speed":3,"upscale":false,"video_bitrate":2500,"video_codec":"h264"}},{"id":"default/progressive2000","version":0,"name":"Default Progressive2000","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:33:32.326046609Z","updated_at":"2018-02-27T22:33:32.326046609Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":3000,"decoder_buffer_size":4000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":720,"speed":3,"upscale":false,"video_bitrate":2000,"video_codec":"h264"}},{"id":"default/progressive1700","version":0,"name":"Default Progressive1700","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:33:18.370171519Z","updated_at":"2018-02-27T22:33:18.370171519Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":2550,"decoder_buffer_size":3400,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":540,"speed":3,"upscale":false,"video_bitrate":1700,"video_codec":"h264"}},{"id":"default/progressive1200","version":0,"name":"Default Progressive1200","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:33:06.287392362Z","updated_at":"2018-02-27T22:33:06.287392362Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":1800,"decoder_buffer_size":2400,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":540,"speed":3,"upscale":false,"video_bitrate":1200,"video_codec":"h264"}}],
        BCLSrenditionsVideoHEVC: [{"id":"default/video550hevc","version":0,"name":"Default HEVC 550","kind":"video","account_id":"default","created_at":"2020-02-20T17:58:08.602132077Z","updated_at":"2020-02-20T17:58:08.602132077Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":825,"decoder_buffer_size":1100,"fixed_keyframe_interval":true,"fragment_duration":2000,"height":360,"keyframe_rate":1,"segment_seconds":2,"speed":3,"video_bframes":3,"video_bitrate":550,"video_codec":"hevc","video_codec_profile":"main","video_reference_frames":6,"width":640}},{"id":"default/video300hevc","version":0,"name":"Default HEVC 300","kind":"video","account_id":"default","created_at":"2020-02-20T17:57:49.622898302Z","updated_at":"2020-02-20T17:57:49.622898302Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":450,"decoder_buffer_size":600,"fixed_keyframe_interval":true,"fragment_duration":2000,"height":270,"keyframe_rate":1,"segment_seconds":2,"speed":3,"video_bframes":3,"video_bitrate":300,"video_codec":"hevc","video_codec_profile":"main","video_reference_frames":6,"width":480}},{"id":"default/video2850hevc","version":0,"name":"Default HEVC 2850","kind":"video","account_id":"default","created_at":"2020-02-20T18:00:42.036123319Z","updated_at":"2020-02-20T18:00:42.036123319Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":4275,"decoder_buffer_size":5700,"fixed_keyframe_interval":true,"fragment_duration":2000,"height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"video_bframes":3,"video_bitrate":2850,"video_codec":"hevc","video_codec_profile":"main","video_reference_frames":6,"width":1920}},{"id":"default/video1600hevc","version":0,"name":"Default HEVC 1600","kind":"video","account_id":"default","created_at":"2020-02-20T18:00:00.347383018Z","updated_at":"2020-02-20T18:00:00.347383018Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":2400,"decoder_buffer_size":3200,"fixed_keyframe_interval":true,"fragment_duration":2000,"height":720,"keyframe_rate":1,"segment_seconds":2,"speed":3,"video_bframes":3,"video_bitrate":1600,"video_codec":"hevc","video_codec_profile":"main","video_reference_frames":6,"width":1280}},{"id":"default/video1300hevc","version":0,"name":"Default HEVC 1300","kind":"video","account_id":"default","created_at":"2020-02-20T17:58:51.222403657Z","updated_at":"2020-02-20T17:58:51.222403657Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1950,"decoder_buffer_size":2600,"fixed_keyframe_interval":true,"fragment_duration":2000,"height":576,"keyframe_rate":1,"segment_seconds":2,"speed":3,"video_bframes":3,"video_bitrate":1300,"video_codec":"hevc","video_codec_profile":"main","video_reference_frames":6,"width":1024}},{"id":"default/video1000hevc","version":0,"name":"Default HEVC 1000","kind":"video","account_id":"default","created_at":"2020-02-20T17:58:24.768036423Z","updated_at":"2020-02-20T17:58:24.768036423Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1500,"decoder_buffer_size":2000,"fixed_keyframe_interval":true,"fragment_duration":2000,"height":432,"keyframe_rate":1,"segment_seconds":2,"speed":3,"video_bframes":3,"video_bitrate":1000,"video_codec":"hevc","video_codec_profile":"main","video_reference_frames":6,"width":768}}],
          BCLSrenditionsAudio: [{"id":"default/audio96","version":5,"name":"Default Audio96","kind":"audio","account_id":"default","created_at":"2016-06-06T23:39:51.876947888Z","updated_at":"2017-12-05T19:52:36.652493367Z","encoding_settings":{"audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}},{"id":"default/audio64","version":5,"name":"Default Audio64","kind":"audio","account_id":"default","created_at":"2016-06-06T23:39:51.49858741Z","updated_at":"2017-12-05T19:52:36.125618038Z","encoding_settings":{"audio_bitrate":64,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}},{"id":"default/audio192","version":2,"name":"audio192","kind":"audio","account_id":"default","created_at":"2016-10-12T00:52:48.575372031Z","updated_at":"2017-03-22T14:20:39.115514582Z","encoding_settings":{"audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}},{"id":"default/audio128","version":5,"name":"Default Audio128","kind":"audio","account_id":"default","created_at":"2016-06-06T23:39:51.093305379Z","updated_at":"2017-12-05T19:52:35.587897334Z","encoding_settings":{"audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}}],
          BCLSrenditionsAudioProgressive: [{"id":"default/progressive_audio96","version":0,"name":"Default Progressive Audio96","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:55:37.964063625Z","updated_at":"2019-01-02T17:55:37.964063625Z","encoding_settings":{"audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/progressive_audio64","version":0,"name":"Default Progressive Audio64","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:56:01.222216054Z","updated_at":"2019-01-02T17:56:01.222216054Z","encoding_settings":{"audio_bitrate":64,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/progressive_audio192","version":0,"name":"Default Progressive Audio192","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:55:03.130899433Z","updated_at":"2019-01-02T17:55:03.130899433Z","encoding_settings":{"audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/progressive_audio128","version":0,"name":"Default Progressive Audio128","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:55:19.793844184Z","updated_at":"2019-01-02T17:55:19.793844184Z","encoding_settings":{"audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}}]
        },
        th,
        td,
        tr,
        txt,
        i,
        j,
        x,
        iMax,
        jMax,
        audioFields = ['audio_bitrate', 'audio_channels', 'audio_codec'],
        progressiveAudioFields = ['audio_bitrate', 'audio_channels', 'audio_codec',  'skip_video'],
        videoFields = ['video_bitrate', 'height', 'aspect_mode', 'decoder_bitrate_cap', 'decoder_buffer_size',  'h264_profile', 'video_codec'],
        progressiveFields = ['video_bitrate', 'audio_bitrate', 'height', 'decoder_bitrate_cap', 'decoder_buffer_size', 'h264_profile'],
        hevcFields = ['video_bitrate', 'height', 'aspect_mode', 'decoder_bitrate_cap', 'decoder_buffer_size', 'keyframe_rate', 'video_codec'],
        audioTableBody = document.getElementById('audioTableBody'),
        progressiveAudioTableBody = document.getElementById('progressiveAudioTableBody'),
        videoRenditionsTableBody = document.getElementById('videoRenditionsTableBody'),
        hevcTableBody = document.getElementById('hevcTableBody'),
        progressiveTableBody = document.getElementById('progressiveTableBody'),
            frag,
        rendition;

    /**
     * sort an array of objects based on an object property
     * @param {array} targetArray - array to be sorted
     * @param {string|number} objProperty - object property to sort on
     * @return sorted array
     */
    function sortArray(targetArray, objProperty) {
      targetArray.sort(function (a, b) {
        var propA = a[objProperty].toLowerCase(), propB = b[objProperty].toLowerCase();
        // sort ascending; reverse propA and propB to sort descending
        if (propA < propB) {
              return -1;
        } else if (propA > propB) {
              return 1;
        } else {
              return 0;
        }
      });
      return targetArray;
    }

      /**
       * Builds a table body
       * @param {Array} dataSet array of rendition settings
       * @param {Array} fields array of fields for the rendition
       * @param {HTMLElement} table body element to add the rows to
       */
      function buildTable(dataSet, fields, el) {
        var frag = new DocumentFragment(),
          tr,
          td,
          txt,
          j,
          jMax;
        iMax = dataSet.length;
        for (i = 0; i < iMax; i++) {
          rendition = dataSet[i];
          // create row
          tr = document.createElement('tr');
          // create name cell
          td = document.createElement('td');
          txt = document.createTextNode(rendition.id);
          tr.appendChild(td);
          td.appendChild(txt);
          // add the encoding_settings
          jMax = fields.length;
          for (j = 0; j < jMax; j++) {
            td = document.createElement('td');
            if (rendition.encoding_settings[fields[j]]) {
              txt = document.createTextNode(rendition.encoding_settings[fields[j]]);
              td.appendChild(txt);
            }
            tr.appendChild(td);
          }
          // add the tr to the doc fragment
          frag.appendChild(tr);
        }
        // add the doc fragment to the element
        el.appendChild(frag);
      }

      // BCLSrenditionData.BCLSrenditionsAudio = sortArray(BCLSrenditionData.BCLSrenditionsAudio, 'name');
      // BCLSrenditionData.BCLSrenditionsAudioProgressive = sortArray(BCLSrenditionData.BCLSrenditionsAudioProgressive, 'name');
      // BCLSrenditionData.BCLSrenditionsVideo = sortArray(BCLSrenditionData.BCLSrenditionsVideo, 'name');
      // BCLSrenditionData.BCLSrenditionsVideoHEVC = sortArray(BCLSrenditionData.BCLSrenditionsVideoHEVC, 'name');
      // BCLSrenditionData.BCLSrenditionsVideoProgressive = sortArray(BCLSrenditionData.BCLSrenditionsVideoProgressive, 'name');

        // build the table bodies
        buildTable(BCLSrenditionData.BCLSrenditionsAudio, audioFields, audioTableBody);
        buildTable(BCLSrenditionData.BCLSrenditionsAudioProgressive, progressiveAudioFields, progressiveAudioTableBody);
        buildTable(BCLSrenditionData.BCLSrenditionsVideo, videoFields, videoRenditionsTableBody);
        buildTable(BCLSrenditionData.BCLSrenditionsVideoProgressive, progressiveFields, progressiveTableBody);
        buildTable(BCLSrenditionData.BCLSrenditionsVideoHEVC, hevcFields, hevcTableBody);
        return {
          'videoRenditions': BCLSrenditionData.BCLSrenditionsVideo,
          'audioRenditions': BCLSrenditionData.BCLSrenditionsAudio,
          'progressiveRenditions': BCLSrenditionData.BCLSrenditionsVideoProgressive
        };
      })(window, document);
