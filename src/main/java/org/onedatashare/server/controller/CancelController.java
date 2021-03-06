package org.onedatashare.server.controller;

import org.onedatashare.server.model.core.ODSConstants;
import org.onedatashare.server.model.core.User;
import org.onedatashare.server.model.requestdata.JobRequestData;
import org.onedatashare.server.model.useraction.UserAction;
import org.onedatashare.server.service.ResourceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

/**
 * Controller that captures request to cancel a transfer that is in progress.
 * Invoked when user clicks the cancel button on the queue page (or admin clicks on history page)
 */
@RestController
@RequestMapping("/api/stork/cancel")
public class CancelController {

    @Autowired
    private ResourceServiceImpl resourceService;

    /**
     * Handler that invokes the service to cancel an ongoing job.
     *
     * @param headers - Incoming request headers
     * @param jobRequestData - Model containing the job ID of the transfer job to be stopped
     * @return Object - Mono of job that was stopped
     */
    @PostMapping
    public Object cancel(@RequestHeader HttpHeaders headers, @RequestBody JobRequestData jobRequestData) {
        String cookie = headers.getFirst(ODSConstants.COOKIE);
        UserAction userAction = UserAction.convertToUserAction(jobRequestData);
        return resourceService.cancel(cookie, userAction);
    }
}
