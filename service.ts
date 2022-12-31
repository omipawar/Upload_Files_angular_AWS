imageUpload(file: any): Observable<any> {
    const authData = JSON.parse(localStorage.getItem('authData')!)
    const formData = new FormData();
    formData.append('file', file);
    const httpHeaders = new HttpHeaders({
      'x-auth-token': `${authData['accessToken']}`,
    });

    return this.http.post<any>(`${environment.apiUrl}/api/v1/staffFileUpload/fileUploadForDefault?fileName=venue`, formData, {
      headers: httpHeaders
    });
  }
