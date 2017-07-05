<template>
  <div class="photo-upload" :class="disabled ? 'disabled' : 'enabled'">
    <div class="uplaod-container">
      <div v-on:mouseover="mouseOver" v-on:mouseout="mouseOver" class="uploader" :class="{hovering: hovering}" :style="{backgroundImage: backgroundImage}" ref="uploader">
        <span v-show="!(value.data || preview)" class="upload-instructions" style="color: black">
          <i class="material-icons">photo</i> <br>Click or drag image here to upload...
        </span>
        <input class="file-photo" type="file" @change="handleImage" @dragenter="hovering = true"
               @dragleave="hovering = false" :disabled="disabled"/>
      </div>
    </div>
    <div class="edit-infos" v-show="mouseActive && (value.data || preview)">
      <p>
        <strong class="text-warning">{{imageName}}</strong><br>
        <span><i class="material-icons">photo</i></span><br>
        <span>Drag and drop or click to replace</span><br>
      </p>
    </div>

    <div class="remove-btn-container">
      <v-btn primary light flat  name="remove" @click.native="removeFile" v-if="preview">Remove image</v-btn>
    </div>

  </div>
</template>

<script>
export default {
  props: ['value', 'disabled'],
  methods: {
    handleImage (event) {
      if (this.disabled) {
        return
      }
      let files = event.target.files
      if (files.length === 0) {
        return
      }
      let reader = new FileReader()
      reader.onload = (event) => {
        this.preview = event.target.result
        files[0]['data'] = this.preview
        this.$emit('input', files[0])
      }

      reader.readAsDataURL(files[0])
    },
    removeFile (event) {
      this.preview = ''
      this.$emit('input', this.preview)
    },
    mouseOver () {
      this.mouseActive = !this.mouseActive
    }
  },
  data () {
    return {
      hovering: false,
      preview: null,
      mouseActive: false
    }
  },
  computed: {
    backgroundImage () {
      let image = this.preview || this.value.data
      if (!image) {
        return null
      }
      return `url('${image}')`
    },

    imageName () {
      let name = this.value.name
      if (!name) {
        return null
      }
      return name
    }
  }
}
</script>


<style>
  .uploader {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 150px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border: 2px dashed #8FBAE5;
  }

  .photo-upload {
    position: relative;
    margin-top: 30px;
  }

  .uplaod-container {
    background-size: 30px 30px;
    background-image: -webkit-linear-gradient(135deg,#F6F6F6 25%,transparent 25%,transparent 50%,#F6F6F6 50%,#F6F6F6 75%,transparent 75%,transparent);
    background-image: linear-gradient(-45deg,#F6F6F6 25%,transparent 25%,transparent 50%,#F6F6F6 50%,#F6F6F6 75%,transparent 75%,transparent);
    background-repeat: repeat;
    background-color: #FFFFFF;
}
  .uplaod-container:hover {
    -webkit-animation:progress 2s linear infinite;
    -moz-animation:progress 2s linear infinite;
    -ms-animation:progress 2s linear infinite;
    animation:progress 2s linear infinite;
  }
  .upload-instructions {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
  }
  .file-photo {
    position: absolute;
    width: 100%;
    height: 400px;
    top: -50px;
    left: 0;
    z-index: 2;
    opacity: 0;
  }
  .enabled .file-photo {
    cursor: pointer;
  }
  .uploader img {
    position: absolute;
    width: 100%;
    top: -1px;
    left: -1px;
    z-index: 1;
    border: none;
  }
  .edit-infos{
    position: absolute;
    top: 0;
    height: 150px;
    width: 100%;
    background-color: rgba(54, 73, 93, 0.67);
    color: white;
    text-align: center;
  }

  .edit-infos p {
    margin-top: 30px;
  }

  .remove-btn-container{
    text-align: right;
  }

  @-webkit-keyframes progress{
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 30px;
    }
  }
  @-moz-keyframes progress{
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 30px;
    }
  }
  @-ms-keyframes progress{
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 30px;
    }
  }
  @keyframes progress{
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 30px;
    }
  }
</style>
