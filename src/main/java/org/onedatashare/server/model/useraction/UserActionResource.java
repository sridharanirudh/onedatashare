package org.onedatashare.server.model.useraction;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.onedatashare.server.model.credential.UploadCredential;
import org.springframework.data.annotation.Transient;

import java.util.ArrayList;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class  UserActionResource {
  private String uri;
  private String id;
  private UserActionCredential credential;
  @Transient
  private UploadCredential uploader;
  private ArrayList<IdMap> map;
  private String type;
}