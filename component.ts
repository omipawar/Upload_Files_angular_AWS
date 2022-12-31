 uploadImage(event: any) {
    const imageData: any[] = [];
    const reader = new FileReader();
    const formData = new FormData();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = (_event) => {
        this.imageSrc = reader.result as string;
        imageData.push(event.target.files[0]);
        formData.append('file', this.imageSrc);

        this.profileService.uploadImageForMedia(imageData[0]).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
      };
    }
  }
